const { check } = require("express-validator");


module.exports = [

    check("email")
        .notEmpty()
        .withMessage("Campo obligatorio")
        .isEmail()
        .withMessage("Ingrese un email válido"),
 
    check("password")
        .notEmpty()
        .withMessage("Campo obligatorio")

];