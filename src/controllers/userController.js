const fs = require("fs");
const path = require("path");

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
  processCreate: (req, res) => {
    const newUser = {
      id: users.length + 1,
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
      categoria: "Superadministrador",
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
    return res.redirect("/");
  },
  login: (req, res) => {
    res.render("user/login");
  },
};
