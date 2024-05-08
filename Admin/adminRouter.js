const express = require('express');
const { adminRegister, adminLogin,addProduct } = require('./adminController');
const { validateProduct } = require('./middleware/productValid');
const adminRouter = express.Router();


adminRouter.post('/admin/register',adminRegister)
adminRouter.post('/admin/login',adminLogin)
adminRouter.post('/products/add',validateProduct,addProduct)



module.exports = {adminRouter};