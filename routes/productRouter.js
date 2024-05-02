const express = require('express');
const prodRouter = express.Router();
const { getAllProducts, searchProduct } = require('../controller/productController');

prodRouter.get('/products', getAllProducts);
prodRouter.get('/products/:name',searchProduct)

module.exports = prodRouter;
