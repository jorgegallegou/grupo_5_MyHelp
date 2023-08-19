const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const products = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/products.json"))
);
const categories = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../dataBase/productCategories.json"))
);

module.exports = {
  productCart: (req, res) => {
    return res.render("products/productCart");
  },
  scheduleService: (req, res) => {
    return res.render("products/scheduleService");
  },
  productDetailId: (req, res) => {
    const productFound = products.find((row) => row.id == req.params.id);
    if (productFound && productFound.borrado != true)
      return res.render("products/productDetailId", { found: productFound });
    else return res.send("Product not found");
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

    /*const cleanProducts = products.filter(
      (row) => row.categoria == "Limpieza hogar" && row.borrado != true
    );
    const specialProducts = products.filter(
      (row) => row.categoria == "Servicios especiales" && row.borrado != true
    );
    return res.render("products/productListHome", {
      clean: cleanProducts,
      special: specialProducts,
      
    });*/
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

    /*const cleanProducts = products.filter(
      (row) => row.categoria == "Limpieza empresa" && row.borrado != true
    );
    const disinfectionProducts = products.filter(
      (row) => row.categoria == "Desinfeccion empresa" && row.borrado != true
    );
    return res.render("products/productListCompany", {
      cleaning: cleanProducts,
      disinfection: disinfectionProducts,
    });*/
  },
  productLoad: (req, res) => {
    return res.render("products/productLoad", { categories: categories });
  },
  processCreate: (req, res) => {
    const newProduct = {
      id: products.length + 1,
      nombre: req.body.nombre,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      categoria: req.body.categoria,
      imagen: req.file.filename,
    };
    fs.writeFileSync(
      path.resolve(__dirname, "../dataBase/products.json"),
      JSON.stringify([...products, newProduct], null, 2),
      "utf-8"
    );
    return res.redirect("/");
  },
  productEdit: (req, res) => {
    const productFound = products.find((row) => row.id == req.params.id);
    if (productFound)
      return res.render("products/productEdit", {
        found: productFound,
        categories: categories,
      });
    else return res.send("Product not found");
  },
  processEdit: (req, res) => {
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
  },
  processDelete: (req, res) => {
    const product = products.find((row) => row.id == req.params.id);
    product.borrado = true;
    fs.writeFileSync(
      path.resolve(__dirname, "../dataBase/products.json"),
      JSON.stringify(products, null, 2)
    );
    return res.redirect("/");
  },
};
