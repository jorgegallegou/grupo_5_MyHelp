const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const uploadFile = require("../middlewares/multerUserMiddleware")
const guestMiddleware = require ("../middlewares/guestMiddleware");
const authMiddleware = require ("../middlewares/authMiddleware");


// VALIDATIONS //

const regValidations = require('../middlewares/regValidation')

// Formulario de registro
router.get("/register", guestMiddleware, controller.register);

//Procesar el registro
router.post(
  "/register",
  uploadFile.single("imagen"),
  regValidations,
  controller.processRegister
);

//Formulario de login
router.get("/login", guestMiddleware, controller.login);

//Process el login
router.post("/login", controller.loginProcess);

//Perfil del usuario
router.get("/profile", authMiddleware, controller.profile);

//Logout
router.get("/logout", controller.logout)

module.exports = router;
