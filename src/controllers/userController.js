const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

const users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/users.json"))
);
const categories = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/userCategories.json"))
);

module.exports = {
  register: (req, res) => {
    res.render("user/register");
  },
  processRegister: (req, res) => {
    const rsdoValidation = validationResult(req);

    if (!rsdoValidation.isEmpty()) {
      res.render("user/register", { errors: rsdoValidation.mapped(), oldData: req.body });
    }else {
      const newUser = {
        id: users.length + 1,
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        categoria: "",
        image: req.file.filename,
        tipo_identificacion: req.body.tipo_identificacion,
        numero_identificacion: req.body.identificacion,
        telefono: req.body.celular,
      };
      fs.writeFileSync(
        path.resolve(__dirname, "../dataBase/users.json"),
        JSON.stringify([...users, newUser], null, 2),
        "utf-8"
      );
      res.send(`Usuario ${newUser.nombre}  creado`)
    }
    
  },
  login: (req, res) => {
    res.render("user/login");
  },
};
