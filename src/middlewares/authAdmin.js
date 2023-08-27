function authAdmin(req, res, next) {
  res.locals.adminLog = false;
  if (req.session.userLogged && req.session.userLogged.id_roles == "2") {
    res.locals.adminLog = true;
    res.locals.adminLogged = req.session.userLogged;
  }
  next();
}
module.exports = authAdmin;
