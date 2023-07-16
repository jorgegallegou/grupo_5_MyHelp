const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const multer = require("multer");
const path = require("path");

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../public/img/imgUsers"));
  },
  filename: (req, file, cb) => {
    let imageName = Date.now() + "-" + file.originalname;
    cb(null, imageName);
  },
});

const fileUpload = multer({
  storage: multerDiskStorage,
});

// VALIDATIONS //

const regValidations = require('../middlewares/regValidation')

// USER register //
router.get("/register", controller.register);
router.post(
  "/register",
  fileUpload.single("imagen"),
  regValidations,
  controller.processRegister
);

router.get("/login", controller.login);
router.post("/login", controller.loginProcess)
router.get("/profile", controller.profile)

module.exports = router;
