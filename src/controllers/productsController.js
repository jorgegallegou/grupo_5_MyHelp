module.exports = {
  productCart: (req, res) => {
    res.render("products/productCart");
  },
  productDetail: (req, res) => {
    res.render("products/productDetail");
  },
  productListHome: (req, res) => {
    res.render("products/productListHome");
  },
  productListCompany: (req, res) => {
    res.render("products/productListCompany");
  },
  productLoad: (req, res) => {
    res.render("products/productLoad");
  },
  productEdit: (req, res) => {
    res.render("products/productEdit");
  },
};
