const express = require('express');
const { login, userUpdate } = require('../controller/userController');
const { userAuth } = require('../middleware/userAuth');
const { addToCart } = require('../controller/cartController');
// const { validateLogin } = require('../middleware/loginValidation');


const userRouter = express.Router();

userRouter.post('/user/login',login)

userRouter.put('/user/update',userAuth,userUpdate)

userRouter.post('/user/cart',userAuth,addToCart)



module.exports = {userRouter};



// validateLogin