const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const multer = require("multer");
const path = require("path");

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../../public/img/imgServiciosMyHelp"));
  },
  filename: (req, file, cb) => {
    let imageName = Date.now() + "-" + file.originalname;
    cb(null, imageName);
  },
});

const fileUpload = multer({
  storage: multerDiskStorage,
});

// USER LOAD //
router.get("/register/create", controller.register);
router.post("/register", fileUpload.single("imagen"), controller.processCreate);

// USER LOGIN //
router.get("/login", controller.login);

module.exports = router;
