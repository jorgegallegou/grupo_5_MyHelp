function guestMiddleware(req, res, next) {
  if (req.session.userLogged && req.session.userLogged.categoria != 2) {
    return res.redirect("/user/profile");
  }
  next();
}

module.exports = guestMiddleware;
