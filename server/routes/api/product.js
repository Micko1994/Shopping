const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
// const multer = require('multer')


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// };

// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });



const Product = require('../../models/Product');

router.get('/', (req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(product => res.json(product));
});

router.post('/', auth, (req, res) => {
    console.log("bazayi newProduct-", req.body)
    console.log("bazayi newProductimage-", req.file)

    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    })


    console.log("file---", file)
    const newProduct = new Product({
        title: req.body.title,
        productImage: req.file.path,
        description: req.body.description,
        previous_price: req.body.previous_price,
        current_price: req.body.current_price,
    });

    newProduct.save().then(product => res.json(product));
});

router.delete('/:id', auth, (req, res) => {
    Product.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
