const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const auth = require('./auth')

router.get('/:id', auth, (req, res, next) => {
    const _id = req.params.id
    if (!_id) {
        return res.status(400).json({ msg: 'There are not User' });
    }
    User.findOne({ _id })
        .then(user => {
            if (!user) return res.status(400).json({ msg: 'There are not User' });

            return res.json({
                name: user.name,
                surname: user.surname,
                address: user.address,
                age: user.age
            })

        })
});

router.post('/', (req, res) => {
    const { name, surname, address, age, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    // Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' });

            const newUser = new User({
                name,
                surname,
                address,
                age,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                })
            })
        })
});

module.exports = router;
