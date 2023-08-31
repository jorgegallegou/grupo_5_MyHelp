const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("../dataBase/models");
const { validationResult } = require("express-validator");

const users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/users.json"))
);


module.exports = {
  register: (req, res) => {
    res.render("user/register");
  },

  processRegister: async (req, res) => {
    try {
      const userRegistered = await db.Usuario.findOne({
        where: { email: req.body.email },
      });
      if (userRegistered) {
        return res.render("user/register", {
          errors: {
            email: {
              msg: "Email ya registrado",
            },
          },
        });
      }
      const rsdoValidation = validationResult(req);
      if (!rsdoValidation.isEmpty()) {
        return res.render("user/register", {
          errors: rsdoValidation.mapped(),
          oldData: req.body,
        });
      } else {
        await db.Usuario.create({
          nombre: req.body.nombre,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 10),
          id_roles: 1,
          image: !req.file ? "default-image.jpg" : req.file.filename,
          tipo_identificacion: req.body.tipo_identificacion,
          numero_identificacion: req.body.identificacion,
          telefono: req.body.celular,
        });
      }
      return res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  login: (req, res) => {
    return res.render("user/login");
  },

  

  loginProcess: async (req, res) => {
    try {
      const userToLogin = await db.Usuario.findOne({where :{ email: req.body.email}});
      if (userToLogin) {
        const checkPass = bcrypt.compareSync(req.body.password, userToLogin.password);

        if (checkPass) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          if (req.body.remember_user) {
            res.cookie("userEmail", userToLogin.email, { maxAge: 1000 * 30 * 2 });
          }
          return res.redirect("profile");
        }
        return res.render("user/login", {
          errors: { email: { msg: "Las credenciales son inválidas" } },
        });
      }
      return res.render("user/login", {
        errors: { email: { msg: "Email no encontrado" } },
      });
    } catch (error) {
      console.log(error);
    }
  },






  profile: (req, res) => {
    return res.render("user/profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error destroying session:", err);
      } else {
        return res.redirect("/");
      }
    });
  },

  list: async (req, res) => {
    try {
      const usuarios = await db.Usuario.findAll();
      return res.render("user/list", { usuarios: usuarios });
    } catch (error) {
      console.log(error);
    }
  },

  /*----------------------------------------------------------
  -- CRUD: Método UPDATE 
  ----------------------------------------------------------*/
  edit: async (req, res) => {
    try {
      let usuarioPedido = db.Usuario.findByPk(req.params.id);
      let rolesPedido = db.Rol.findAll();

      Promise.all([usuarioPedido, rolesPedido]).then(function ([
        usuario,
        roles,
      ]) {
        res.render("user/edit", {
          usuario: usuario,
          roles: roles,
        });
      });
    } catch (error) {
      console.log(error);
    }
  },

  processEdit: async (req, res) => {
    try {
      if (!req.file) {
        const usuario = await db.Usuario.findByPk(req.params.id);
        imagen = usuario.image;
      } else {
        imagen = req.file.filename;
      }
      
      await db.Usuario.update(
        {
          nombre: req.body.nombre,
          email: req.body.email,
          password: req.body.password,
          tipo_identificacion: req.body.tipo_identificacion,
          numero_identificacion: req.body.numero_identificacion,
          id_roles: req.body.rol,
          telefono: req.body.telefono,
          image: imagen,
        },
        { where: { id: req.params.id } }
      );
      
      
      req.session.userLogged =
      {
        id: req.params.id,
        nombre: req.body.nombre,
        email: req.body.email,
        tipo_identificacion: req.body.tipo_identificacion,
        numero_identificacion: req.body.numero_identificacion,
        id_roles: req.body.rol,
        telefono: req.body.telefono,
        image: imagen,
      }
      
      return res.redirect('/user/profile');
    } catch (error) {
      console.log(error);
    }
  },
};