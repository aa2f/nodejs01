const express = require('express');
const router = express.Router();
const {getProducts, createProduct, detelteProduct} = require('../controller/products');

router.get('/',getProducts);
router.post('/',createProduct);
router.delete('/:id',detelteProduct)

module.exports = router

