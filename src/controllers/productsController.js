const db = require("../dataBase/models");
const { validationResult } = require("express-validator");

module.exports = {
  productCart: (req, res) => {
    return res.render("products/productCart");
  },

  scheduleService: (req, res) => {
    return res.render("products/scheduleService");
  },

  /*-----------------------------------------------------------------
  <-- Muestra el detalle de un producto a travez de bases de datos--> 
  -----------------------------------------------------------------*/
  productDetailId: async (req, res) => {
    try {
      const serviceDetail = await db.Servicio.findByPk(req.params.id, {
        where: {
          deleted_at: null,
        },
        include: [
          {
            association: "categorias",
          },
        ],
      });
      if (serviceDetail) {
        res.render("products/productDetailId", { found: serviceDetail });
      } else return res.send("Product not found");
    } catch (error) {
      console.log(error);
    }
  },

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
      return res.render("products/productListHome", {
        clean: clean,
        special: special,
      });
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
      return res.render("products/productListCompany", {
        cleaning: cleaning,
        disinfection: disinfection,
      });
    } catch (error) {
      console.log(error);
    }
  },

  /*-------------------------------------------------------------------------------------
-- Muestra la lista de categorias en la vista de "Creacion de Servicio" --> ProductLoad
-------------------------------------------------------------------------------------*/
  productLoad: async (req, res) => {
    try {
      let categorias = await db.CategoriaServicio.findAll()
      return res.render('products/productLoad', {categorias: categorias})
    } catch (error) {
      console.log(error);
    }
  },

  /*------------------------------------------------------------------------------------
-- CRUD: Método CREATE
------------------------------------------------------------------------------------*/
  processCreate: async (req, res) => {
    try {
      let categorias = await db.CategoriaServicio.findAll()

      const rsdoValidation = validationResult(req);
      if (!rsdoValidation.isEmpty()) {
        return res.render("products/productLoad", {
          categorias:categorias,
          errors: rsdoValidation.mapped(),
          oldData: req.body,
        });
      }else {
        const servicioCreado = await db.Servicio.create({
          nombre: req.body.nombre,
          precio: req.body.precio,
          descripcion: req.body.descripcion,
          descripcion_general: req.body.descripcion_general,
          id_categorias_servicios: req.body.categoria,
          imagen: req.file.filename,
        });
        return res.redirect("/productDetail/" + servicioCreado.id);
      }
      
    } catch (error) {
      console.log(error);
    }
  },

  /*-----------------------------------------------------------------------------------
-- CRUD: Método UPDATE 
------------------------------------------------------------------------------------*/
  productEdit: async (req, res) => {
    try {
      let servicioPedido = db.Servicio.findByPk(req.params.id);
      let categoriasPedido = db.CategoriaServicio.findAll();

      Promise.all([servicioPedido, categoriasPedido]).then(function ([
        servicio,
        categorias,
      ]) {
        res.render("products/productEdit", {
          servicio: servicio,
          categorias: categorias,
        });
      });
    } catch (error) {
      console.log(error);
    }
  },

  processEdit: async (req, res) => {
    try {
      if (!req.file) {
        const servicio = await db.Servicio.findByPk(req.params.id);
        imagen = servicio.imagen;
      } else {
        imagen = req.file.filename;
      }
      await db.Servicio.update(
        {
          nombre: req.body.nombre,
          precio: req.body.precio,
          descripcion: req.body.descripcion,
          descripcion_general: req.body.descripcion_general,
          id_categorias_servicios: req.body.categoria,
          imagen: imagen,
        },
        { where: { id: req.params.id } }
      );


      return res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  /*------------------------------------------------------------------------------------
-- CRUD: Método DELETE 
------------------------------------------------------------------------------------*/
  processDelete: async (req, res) => {
    try {
      await db.Servicio.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};
