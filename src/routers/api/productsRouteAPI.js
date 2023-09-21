const express = require('express');
const router = express.Router();
const controllerApi = require('../../controllers/api/productsAPI');

router.get('/', controllerApi.allList);
router.get('/productHome', controllerApi.productListHome);
router.get('/productCompany', controllerApi.productListCompany);
router.get('/productDetail/:id', controllerApi.productDetailId);
router.get('/cart', controllerApi.cart);

//CRUD
router.get('/create', controllerApi.productLoad);
router.post('/create', controllerApi.processCreate);

module.exports = router;
