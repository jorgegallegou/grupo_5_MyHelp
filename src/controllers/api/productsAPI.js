const { response } = require('express');
const db = require('../../dataBase/models');

module.exports = {
  productListHome: async (req, res) => {
    try {
      const clean = await db.Servicio.findAll({
        where: {
          id_categorias_servicios: 1,
          deleted_at: null,
        },
      });
      const special = await db.Servicio.findAll({
        where: {
          id_categorias_servicios: 2,
          deleted_at: null,
        },
      });
      const response = {
        meta: {
          success: true,
          endPoint: '/api/products/productCompany',
        },
        data: {
          clean: clean,
          special: special,
        },
      };
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  productListCompany: async (req, res) => {
    try {
      const cleaning = await db.Servicio.findAll({
        where: {
          id_categorias_servicios: 3,
          deleted_at: null,
        },
      });
      const disinfection = await db.Servicio.findAll({
        where: {
          id_categorias_servicios: 4,
          deleted_at: null,
        },
      });
      const response = {
        meta: {
          success: true,
          endPoint: '/api/products/productListCompany',
        },
        data: {
          cleaning: cleaning,
          disinfection: disinfection,
        },
      };
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  productDetailId: async (req, res) => {
    try {
      const serviceDetail = await db.Servicio.findByPk(req.params.id, {
        where: {
          deleted_at: null,
        },
        include: [
          {
            association: 'categorias',
          },
        ],
      });
      const response = {
        meta: {
          success: true,
          endPoint: `/api/products/productDetail/${req.params.id}`,
        },
        data: {
          serviceDetail: serviceDetail,
        },
      };
      return res.json(response);
    } catch (error) {}
  },
  cart: async (req, res) => {
    try {
      const products = await db.Servicio.findAll({
        where: {
          deleted_at: null,
        },
      });
      const response = {
        meta: {
          success: true,
          endPoint: '/api/products/cart',
        },
        data: {
          products: products,
        },
      };
      return res.json(response);
    } catch (error) {}
  },
  productLoad: async (req, res) => {
    try {
      let categorias = await db.CategoriaServicio.findAll();
      const response = {
        meta: {
          success: true,
          endPoint: '/api/products/create',
        },
        data: {
          categorias: categorias,
        },
      };
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  processCreate: async (req, res) => {
    try {
      let categorias = await db.CategoriaServicio.findAll();

      const servicioCreado = await db.Servicio.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        descripcion_general: req.body.descripcion_general,
        id_categorias_servicios: req.body.categoria,
        imagen: req.file.filename,
      });
      const response = {
        meta: {
          success: true,
          endPoint: '/api/products/create',
        },
        data: {
          categorias: categorias,
          servicioCreado: servicioCreado,
        },
      };
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
