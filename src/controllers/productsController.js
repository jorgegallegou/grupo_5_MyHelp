const path = require("path");

const controller = {
  productCart: (req, res) => {
    res.render(path.resolve("./src/views/products/productCart"));
  },
  productDetail: (req, res) => {
    res.render(path.resolve("./src/views/products/productDetail"));
  },
};

module.exports = controller;
