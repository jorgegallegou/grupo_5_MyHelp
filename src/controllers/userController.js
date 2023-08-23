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

  processRegister: (req, res) => {
    //Validación de email ya registrado
    let userRegistered = users.find((row) => row.email == req.body.email);
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
      return res.redirect("/");
    }
  },

  login: (req, res) => {
    return res.render("user/login");
  },

  loginProcess: async (req, res) => {
    try {
      const { email, password } = req.body;

      const userToLogin = await db.Usuario.findOne({ email });

      if (userToLogin) {
        const checkPass = await bcrypt.compare(password, userToLogin.password);

        if (checkPass) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          if (req.body.remember_user) {
            res.cookie("userEmail", email, { maxAge: 1000 * 30 * 2 });
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

    /*---------------------------------
     PROCESS TO LOGIN THROUGH JSONDATA
    ---------------------------------*/

    // const userData = JSON.parse(
    //   fs.readFileSync(path.resolve(__dirname, "../dataBase/users.json"))
    // );
    // let userToLogin = userData.find((row) => row.email == req.body.email);
    // if (userToLogin) {
    //   let isOkThePassword = bcrypt.compareSync(
    //     req.body.password,
    //     userToLogin.password
    //   );
    //   if (isOkThePassword) {
    //     delete userToLogin.password;
    //     req.session.userLogged = userToLogin;
    //     if (req.body.remember_user) {
    //       res.cookie("userEmail", req.body.email, { maxAge: 1000 * 30 * 2 });
    //     }
    //     return res.redirect("profile");
    //   }
    //   return res.render("user/login", {
    //     errors: { email: { msg: "Las credenciales son inválidas" } },
    //   });
    // }
    // return res.render("user/login", {
    //   errors: { email: { msg: "Email no encontrado" } },
    // });
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
};
