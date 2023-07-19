const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const multer = require("multer");
const path = require("path");
const guestMiddleware = require ("../middlewares/guestMiddleware");
const authMiddleware = require ("../middlewares/authMiddleware");

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

// Formulario de registro
router.get("/register", guestMiddleware, controller.register);

//Procesar el registro
router.post(
  "/register",
  fileUpload.single("imagen"),
  regValidations,
  controller.processRegister
);

//Formulario de login
router.get("/login", guestMiddleware, controller.login);

//Procesr el login
router.post("/login", controller.loginProcess)

//Perfil del usuario
router.get("/profile", authMiddleware, controller.profile)

//Logout
router.get("/logout", controller.logout)

module.exports = router;
