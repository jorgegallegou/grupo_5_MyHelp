const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
const { validationResult } = require("express-validator");
const users = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../dataBase/users.json")));
const User = require ("../../models/User.js");

module.exports = {

  register: (req, res) => {
    res.render("user/register");
  },

  processRegister: (req, res) => {
    
    //Validación de email ya registrado
    let userInDB = User.findByField('email', req.body.email);
      if (userInDB) {
        return res.render ('user/register', {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          }          
        })
      }

    const rsdoValidation = validationResult(req);
    if (!rsdoValidation.isEmpty()) {
      return res.render("user/register", { errors: rsdoValidation.mapped(), oldData: req.body });
    } else {
      const newUser = {
        id: users.length + 1,
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10), 
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
      return res.send(`Usuario 
      ${newUser.nombre} 
      creado`)
      }
  },

  login: (req, res) => {
  res.render("user/login");
  }
}