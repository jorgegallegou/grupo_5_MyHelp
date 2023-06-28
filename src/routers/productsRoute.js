const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const multer = require('multer');
const path = require('path');

const multerDiskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve(__dirname, '../../public/img/imgServiciosMyHelp'));
	},
	filename: (req, file, cb) => {
		let imageName = Date.now() + path.extname(file.originalname);
		cb(null, imageName);
	},
});

const fileUpload = multer({
	storage: multerDiskStorage,
});

// PRODUCTS
router.get('/productHome', controller.productListHome);
router.get('/productCompany', controller.productListCompany);
router.get('/productCart', controller.productCart);
router.get('/productDetail', controller.productDetail);
router.get('/productDetail/:id', controller.productDetailId);

// LOAD PRODUCT
router.get('/product/create', controller.productLoad);
router.post('/product', fileUpload.single('imagen'), controller.processCreate);

// EDIT PRODUCT
router.get('/product/edit/:id', controller.productEdit);
router.put('/product/:id', controller.processEdit);

// DELETE PRODUCT
router.delete('/product/:id', controller.processDelete);

module.exports = router;
