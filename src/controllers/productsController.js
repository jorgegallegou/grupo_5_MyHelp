const fs = require('fs');
const path = require('path');

const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../dataBase/products.json')));

module.exports = {
	productCart: (req, res) => {
		return res.render('products/productCart');
	},
	productDetail: (req, res) => {
		return res.render('products/productDetail');
	},
	productDetailId: (req, res) => {
		const productFinded = products.find((row) => row.id == req.params.id);
		if (productFinded) return res.render('products/productDetailId', { found: productFinded });
		else return res.send('Product not found');
	},
	productListHome: (req, res) => {
		const cleanProducts = products.filter((row) => row.categoria == 'Limpieza y Aseo');
		const specialProducts = products.filter((row) => row.categoria == 'Servicios Especiales');
		res.render('products/productListHome', { clean: cleanProducts, special: specialProducts });
	},
	productListCompany: (req, res) => {
		const cleanProducts = products.filter((row) => row.categoria == 'Limpieza');
		const disinfectionProducts = products.filter((row) => row.categoria == 'Desinfección');
		res.render('products/productListCompany', {
			cleaning: cleanProducts,
			disinfection: disinfectionProducts,
		});
	},
	productLoad: (req, res) => {
		res.render('products/productLoad');
	},
	productEdit: (req, res) => {
		res.render('products/productEdit');
	},
};
