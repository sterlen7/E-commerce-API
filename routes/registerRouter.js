const express = require('express');
const { register } = require('../controller/registerController');
const { validateRegister } = require('../middleware/registerValidation');
const { userAuth } = require('../middleware/userAuth');
const { addToCart } = require('../controller/cartController');
const userRouter = express.Router();


userRouter.post ('/register',validateRegister,register);


userRouter.post('/user/cart',userAuth,addToCart)

module.exports = userRouter;
