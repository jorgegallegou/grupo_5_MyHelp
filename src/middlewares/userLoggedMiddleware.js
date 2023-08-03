const fs = require("fs");
const path = require("path");

const users = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/users.json"))
);

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  if (!req.session.userLogged && req.cookies.remember) {
    const userFound = users.find(
      (row) => row.email == req.cookies.remember_user
    );
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
