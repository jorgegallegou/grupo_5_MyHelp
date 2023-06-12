module.exports = {
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  productList: (req, res) => {
    res.render("products/productList");
  },
  productLoad: (req, res) => {
    res.render("products/productLoad");
  },
  productEdit: (req, res) => {
    res.render("products/productEdit");
  },
};
