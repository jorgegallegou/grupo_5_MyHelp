const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");

const uploadFile = require("../middlewares/multerProductMiddleware");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

// PRODUCTS
router.get("/productHome", controller.productListHome);
router.get("/productCompany", controller.productListCompany);
router.get("/productCart", controller.productCart);
router.get("/scheduleService", controller.scheduleService);
router.get("/productDetail/:id", controller.productDetailId);

// LOAD PRODUCT
router.get(
  "/product/create",
  guestMiddleware,
  authMiddleware,
  controller.productLoad
);
router.post("/product", uploadFile.single("imagen"), controller.processCreate);

// EDIT PRODUCT
router.get(
  "/product/edit/:id",
  guestMiddleware,
  authMiddleware,
  controller.productEdit
);
router.put("/product/:id", uploadFile.single("imagen"), controller.processEdit);

// DELETE PRODUCT
router.delete("/product/:id", controller.processDelete);

module.exports = router;
