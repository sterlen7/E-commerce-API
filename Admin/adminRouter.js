const express = require('express');
const { adminRegister, adminLogin } = require('./adminController');
const { validateRegister } = require('../middleware/registerValidation');
const { addProduct } = require('./addProducts');
const validateProduct = require('./middleware/productValid');
const adminRouter = express.Router();


adminRouter.post('/adminreg',validateRegister,adminRegister)
adminRouter.post('/admin/login',adminLogin)
adminRouter.post('/add',validateProduct,addProduct)


module.exports = {adminRouter};