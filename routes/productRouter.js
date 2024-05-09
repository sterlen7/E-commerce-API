const express = require('express');
const prodRouter = express.Router();
const { getAllProducts, searchProduct } = require('../controller/productController');
const { validSearch } = require('../middleware/productSearch');

prodRouter.get('/products', getAllProducts);
prodRouter.get('/products/:name',validSearch,searchProduct)

module.exports = prodRouter;
