const express = require('express');
const { register } = require('../controller/registerController');
const { validateRegister } = require('../middleware/registerValidation');
const { userAuth } = require('../middleware/userAuth');
const { addToCart } = require('../controller/cartController');
const regRouter = express.Router();


regRouter.post ('/register',validateRegister,register);


module.exports = regRouter;
