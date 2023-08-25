const db = require("../dataBase/models");

async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  if (!req.session.userLogged && req.cookies.remember) {
    const userFound = await db.Usuario.findOne({
      where :{
        email: req.cookies.remember_user
  }});
    delete userFound.password;
    req.session.userLogged = userFound;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;

