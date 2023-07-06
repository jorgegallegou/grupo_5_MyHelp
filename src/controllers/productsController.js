const fs = require("fs");
const path = require("path");

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
  productDetail: (req, res) => {
    return res.render("products/productDetail");
  },
  productDetailId: (req, res) => {
    const productFound = products.find((row) => row.id == req.params.id);
    if (productFound && productFound.borrado != true)
      return res.render("products/productDetailId", { found: productFound });
    else return res.send("Product not found");
  },
  productListHome: (req, res) => {
    const cleanProducts = products.filter(
      (row) => row.categoria == "Limpieza hogar" && row.borrado != true
    );
    const specialProducts = products.filter(
      (row) => row.categoria == "Servicios especiales" && row.borrado != true
    );
    return res.render("products/productListHome", {
      clean: cleanProducts,
      special: specialProducts,
    });
  },
  productListCompany: (req, res) => {
    const cleanProducts = products.filter(
      (row) => row.categoria == "Limpieza empresa" && row.borrado != true
    );
    const disinfectionProducts = products.filter(
      (row) => row.categoria == "Desinfeccion" && row.borrado != true
    );
    return res.render("products/productListCompany", {
      cleaning: cleanProducts,
      disinfection: disinfectionProducts,
    });
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
