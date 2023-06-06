const express = require("express");
const router = express.Router();

const controller = require("../controllers/productsController");

router.get("/productCart", controller.productCart);
router.get("/productDetail", controller.productDetail);
router.get("/productList", controller.productList);

module.exports = router;
