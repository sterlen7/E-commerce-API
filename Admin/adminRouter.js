const express = require('express');
const { adminRegister, adminLogin } = require('./adminController');
const { validateRegister } = require('../middleware/registerValidation');
const adminRouter = express.Router();


adminRouter.post('/adminreg',validateRegister,adminRegister)
adminRouter.post('/admin/login',adminLogin)


module.exports = {adminRouter};