const express = require('express');
const { adminRegister, adminLogin,addProduct, banUser } = require('./adminController');
const { validateProduct } = require('./middleware/productValid');
const { validateAdminReg } = require('./middleware/adminRegister');
const { adminAuth } = require('./middleware/adminAuth');
const adminRouter = express.Router();


adminRouter.post('/admin/register',validateAdminReg,adminRegister)
adminRouter.post('/admin/login',adminLogin)
adminRouter.post('/add/product', adminAuth,validateProduct,addProduct)
adminRouter.put('/admin/ban',adminAuth,banUser)




module.exports = {adminRouter};