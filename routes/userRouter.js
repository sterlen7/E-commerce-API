const express = require('express');
const { login } = require('../controller/userController');
// const { validateLogin } = require('../middleware/loginValidation');


const loginRouter = express.Router();

loginRouter.post('/user/login',login)



module.exports = {loginRouter};



// validateLogin