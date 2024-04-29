const express = require('express');
const { adminRegister } = require('./adminController');
const { validateRegister } = require('../middleware/registerValidation');
const adminRouter = express.Router();


adminRouter.post('/adminreg',validateRegister,adminRegister)


module.exports = {adminRouter};