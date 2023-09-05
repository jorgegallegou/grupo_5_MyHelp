const { check } = require("express-validator");

module.exports = [
  check("nombre")
    .notEmpty()
    .withMessage("Campo Obligatorio")
    .isLength({ min: 5 })
    .withMessage("Debe tener al menos 5 caracteres"),

  check("descripcion")
    .notEmpty()
    .withMessage("Campo Obligatorio")
    .isLength({ min: 20 })
    .withMessage("Debe incluir al menos 20 caracteres"),

  check("imagen").custom((value, { req }) => {
    if (req.fileInvalidError) {
      throw new Error("¡Tipo de archivo invalido!");
    }
    return true;
  }),
];
