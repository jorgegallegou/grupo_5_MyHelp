const { check } = require("express-validator");


module.exports = [

    check("email")
        .notEmpty()
        .withMessage("Campo obligatorio")
        .isEmail()
        .withMessage("ingrese un email válido"),
 
    check("password")
        .notEmpty()
        .withMessage("Campo obligatorio")

];