const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    previous_price: {
        type: String,
    },
    current_price: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('product', ProductSchema);
