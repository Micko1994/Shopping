const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String },
    userImage: { type: String },
    address: { type: String, required: true },
    time: { type: String, required: true },
    telephone: { type: Number, required: true },
    payment: { type: String, required: true },
})

module.exports = Item = mongoose.model('order', OrderSchema);
