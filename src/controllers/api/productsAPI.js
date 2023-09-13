const db = require('../../dataBase/models');
const { Op } = require('sequelize');
const Servicio = db.Servicio;
const CategoriaServicio = db.CategoriaServicio;

module.exports = {
  productListHome: async (req, res) => {
    try {
      const response = {};

      const [allHomeServices, categorias] = await Promise.all([
        Servicio.findAll(
          { where: { id_categorias_servicios: [1, 2] } },
          { include: [{ association: 'categorias' }] }
        ),
        CategoriaServicio.findAll({ include: [{ association: 'servicios' }] }),
      ]);
      response.count = allHomeServices.length;
      response.countByCategory = {};
      categorias.forEach((row) => {
        response.countByCategory[row.name] = row.servicios.length;
      });
      response.products = allHomeServices.map((row) => {
        return {
          id: row.id,
          name: row.nombre,
          description: row.descripcion,
          categories: row.categorias,
          detail: `/api/products/${row.id}`,
        };
      });
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  productListCompany: async (req, res) => {
    try {
      const response = {};

      const [allCompanyServices, categorias] = await Promise.all([
        Servicio.findAll(
          { where: { id_categorias_servicios: [3, 4] } },
          { include: [{ association: 'categorias' }] }
        ),
        CategoriaServicio.findAll({ include: [{ association: 'servicios' }] }),
      ]);

      response.count = allCompanyServices.length;
      response.countByCategory = {};
      categorias.forEach((row) => {
        response.countByCategory[row.name] = row.servicios.length;
      });
      response.products = allCompanyServices.map((row) => {
        return {
          id: row.id,
          name: row.nombre,
          description: row.descripcion,
          categories: row.categorias,
          detail: `/api/products/${row.id}`,
        };
      });
      return res.json(response);
    } catch (error) {
      console.log(error);
    }
  },
  productDetailId: async (req, res) => {
    try {
      const response = {};
      const serviceDetail = await db.Servicio.findByPk(req.params.id, {
        where: { deleted_at: null },
        include: [{ association: 'categorias' }],
      });
      response.meta = {
        success: true,
        endPoint: `/api/products/productDetail/${req.params.id}`,
      };
      response.data = serviceDetail;
      response.data.imagen = `/public/img/imgServiciosMyHelp/${serviceDetail.imagen}`;

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
      let categorias = await CategoriaServicio.findAll();
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