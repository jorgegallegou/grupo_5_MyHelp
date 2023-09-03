const { check } = require("express-validator");

module.exports = [

  check("nombre")
    .notEmpty()
    .withMessage("Campo obligatório")
    .isLength({min: 2})    
    .withMessage("Debe tener al menos 2 caracteres"),    

  check("email")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isEmail()
    .withMessage("ingrese un email válido"),

  check("password")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min: 8})    
    .withMessage("Debe tener al menos 8 caracteres"),

  check("tipo_identificacion")
    .exists()
    .optional(),

  check("identificacion")
    .notEmpty()
    .withMessage("Campo obligatorio"),

  check("celular")
    .notEmpty()
    .withMessage("Campo obligatorio"),

  check('imagen').custom((value , {req}) => {
    if(req.fileInvalidError || !req.file){
      throw new Error('Campo obligatorio / Tipo de archivo invalido')
    }
    return true
  })
];