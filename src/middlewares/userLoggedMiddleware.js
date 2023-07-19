function userLoggedMiddleare (req, res, next) {
    res.locals.isLogged = false
    next();
}

module.exports = userLoggedMiddleare