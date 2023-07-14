const { body } = require("express-validator");

module.exports = [
  body("nombre").notEmpty().withMessage("Campo obligatório"),
  body("email")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isEmail()
    .withMessage("ingrese un email válido"),
  body("password").notEmpty().withMessage("Campo obligatorio"),
  body("imagen").custom((value, {req}) => {
    if (!req.file) throw new Error('Inserta una imagen');
    return true;
  }),
  body("tipo_identificacion").exists().optional(),
  body("identificacion").notEmpty().withMessage("Campo obligatorio"),
  body("celular").notEmpty().withMessage("Campo obligatorio"),
];