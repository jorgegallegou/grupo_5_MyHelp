const express = require('express');
const router = express.Router();

const controller = require('../controllers/productsController');

// PRODUCTS
router.get('/productListHome', controller.productListHome);
router.get('/productListCompany', controller.productListCompany);
router.get('/productCart', controller.productCart);
router.get('/productDetail', controller.productDetail);
router.get('/productDetail/:id', controller.productDetailId);
// LOAD PRODUCT
router.get('/productLoad', controller.productLoad);
router.post('/');
// EDIT PRODUCT
router.get('/productEdit', controller.productEdit);
// DELETE PRODUCT

module.exports = router;
