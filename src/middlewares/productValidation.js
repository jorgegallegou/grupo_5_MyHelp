const { check } = require("express-validator");

module.exports = [

  check('nombre')
    .notEmpty()
    .withMessage('Campo Obligatorio')
    .isLength({min:5})
    .withMessage('Debe tener al menos 5 caracteres'),

  check('descripcion')
  .isLength({min:20})
  .withMessage('Debe incluir al menos 20 caracteres'),

  check('imagen').custom((value , {req}) => {
    if(!req.file) throw new Error('El campo no puede estar vacio')
    if(!req.file.mimetype.startsWith('image/')) {
      throw new Error(' El archivo debe ser de tipo imagen')
    }
  })
]