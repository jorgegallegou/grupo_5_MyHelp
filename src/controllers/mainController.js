const db = require('../dataBase/models');

module.exports = {
  index: (req, res) => {
    return res.render('index');
  },
  // list: async (req, res) => {
  //   try {
  //     const allProductsList = await db.Servicio.findAll({
  //       include: [{ association: 'categorias' }],
  //     });
  //     return res.render('/', { services: services });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // },
  about: (req, res) => {
    return res.render('aboutUS');
  },
};
