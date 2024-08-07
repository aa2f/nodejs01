const express = require('express');
const router = express.Router();
const {getProducts, createProduct, detelteProduct, getProduct, updateProduct} = require('../controller/products');

router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);
router.put('/:id',updateProduct)
router.delete('/:id',detelteProduct)

module.exports = router

