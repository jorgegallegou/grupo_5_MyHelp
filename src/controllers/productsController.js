const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const products = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/products.json"))
);

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

/*-----------------------------------------------------------------
<-- Muestra el detalle de un producto a travez de bases de datos--> 
-----------------------------------------------------------------

    const productFound = products.find((row) => row.id == req.params.id);
    if (productFound && productFound.borrado != true)
      return res.render("products/productDetailId", { found: productFound });
    else return res.send("Product not found");*/
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
      await db.CategoriaServicio.findAll().then(function (categorias) {
        return res.render("products/productLoad", { categorias: categorias });
      });
    } catch (error) {
      console.log(error);
    }
  },

/*------------------------------------------------------------------------------------
-- CRUD: Método CREATE
------------------------------------------------------------------------------------*/
  processCreate: async (req, res) => {
    try {
      const servicioCreado = await db.Servicio.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        descripcion_general: req.body.descripcion_general,
        id_categorias_servicios: req.body.categoria,
        imagen: req.file.filename,
      });
      return res.redirect("/productDetail/" + servicioCreado.id);
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
    /*
    const productFound = products.find((row) => row.id == req.params.id);
    if (productFound)
      return res.render("products/productEdit/:id", {
        found: productFound,
        categories: categories,
      });
    else return res.send("Product not found");
    */
  },

  processEdit: async (req, res) => {
    try {
      await db.Servicio.update(
        {
          nombre: req.body.nombre,
          precio: req.body.precio,
          descripcion: req.body.descripcion,
          descripcion_general: req.body.descripcion_general,
          id_categorias_servicios: req.body.categoria,
          imagen: req.file.filename,
        },
        { where: { id: req.params.id } }
      );
      return res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },

  /*
    const product = products.find((row) => row.id == req.params.id);
    if (req.file) {
      fs.unlinkSync(
        path.resolve(
          __dirname,
          "../../public/img/imgServiciosMyHelp/" + product.imagen
        )
      );
      product.imagen = req.file.filename;
    }
    for (let prop in req.body) {
      product[prop] = req.body[prop];
    }
    fs.writeFileSync(
      path.resolve(__dirname, "../dataBase/products.json"),
      JSON.stringify(products, null, 2)
    );
    return res.redirect("/");
    */

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

  /*
  processDelete: (req, res) => {
    const product = products.find((row) => row.id == req.params.id);
    product.borrado = true;
    fs.writeFileSync(
      path.resolve(__dirname, "../dataBase/products.json"),
      JSON.stringify(products, null, 2)
    );
    return res.redirect("/");
  },
  */
};