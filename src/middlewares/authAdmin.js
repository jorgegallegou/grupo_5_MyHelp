function authAdmin(req, res, next) {
  res.locals.admiLog = false;
  if (req.session.userLogged && req.session.userLogged.categoria == "2") {
    res.locals.adminLog = true;
    res.locals.adminLogged = req.session.userLogged;
  }
  next();
}
module.exports = authAdmin;