const express = require('express');
const prodRouter = express.Router();
const { getAllProducts } = require('../controller/productController');

prodRouter.get('/products', getAllProducts);

module.exports = prodRouter;
