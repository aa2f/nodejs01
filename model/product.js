
const mongoose = require('mongoose');

const products = mongoose.Schema({
    name: {type: String, required: true},
    price: Number,
    desc: String,
    rate: Number,
    date: Date
});


module.exports = mongoose.model('PRODUCTS',products);