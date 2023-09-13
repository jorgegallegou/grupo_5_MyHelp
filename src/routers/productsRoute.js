const express = require('express');
const router = express.Router();
const controller = require('../controllers/productsController');
const uploadFile = require('../middlewares/multerProductMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const productCreateValidation = require('../middlewares/productCreateValidation');
const validateEditProduct = require('../middlewares/validateEditProduct');

// PRODUCTS
router.get('/productHome', controller.productListHome);
router.get('/productCompany', controller.productListCompany);
router.get('/productCart', controller.productCart);
router.get('/scheduleService', controller.scheduleService);
router.get('/productDetail/:id', controller.productDetailId);

// LOAD PRODUCT
router.get(
  '/product/create',
  guestMiddleware,
  authMiddleware,
  controller.productLoad
);
router.post(
  '/product/create',
  uploadFile.single('imagen'),
  productCreateValidation,
  controller.processCreate
);

// EDIT PRODUCT
router.get(
  '/product/edit/:id',
  guestMiddleware,
  authMiddleware,
  controller.productEdit
);
router.put(
  '/product/edit/:id',
  uploadFile.single('imagen'),
  validateEditProduct,
  controller.processEdit
);

// DELETE PRODUCT
router.post('/product/delete/:id', controller.processDelete);

module.exports = router;
