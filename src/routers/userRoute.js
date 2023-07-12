const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");

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

const validations = [
  body("nombre").notEmpty().withMessage("Campo obligatório"),
  body("email")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isEmail()
    .withMessage("ingrese un email válido"),
  body("password").notEmpty().withMessage("Campo obligatorio"),
  /*body("imagen").custom((value, {req}) => {
    let file = req.file;
    if (!file) throw new Error('Inserta una imagen');
  }),*/
  body("tipo_identificacion").exists().optional(),
  body("identificacion").notEmpty().withMessage("Campo obligatorio"),
  body("celular").notEmpty().withMessage("Campo obligatorio"),
];

// USER register //
router.get("/register", controller.register);
router.post(
  "/register",
  fileUpload.single("imagen"),
  validations,
  controller.processRegister
);

// USER EDIT //

// USER LOGIN //
router.get("/login", controller.login);

// USER DELETE //

module.exports = router;
