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

const fileFilter = (req, file, cb) => {
  if(file.mimetype.includes('image')){
    cb(null, true)
  } else{
    req.fileInvalidError = true
    cb(null, false)
  }
}  

const fileUpload = multer({
  storage: multerDiskStorage,
  fileFilter: fileFilter  
});

module.exports = fileUpload;