const express = require('express');
const { adminRegister, adminLogin,addProduct, banUser } = require('./adminController');
const { validateProduct } = require('./middleware/productValid');
const { validateAdminReg } = require('./middleware/adminRegister');
const adminRouter = express.Router();


adminRouter.post('/admin/register',validateAdminReg,adminRegister)
adminRouter.post('/admin/login',adminLogin)
adminRouter.post('/products/add',validateProduct,addProduct)
adminRouter.put('/admin/ban',banUser)




module.exports = {adminRouter};