const express = require('express');
const { register } = require('../controller/registerController');
const { validateRegister } = require('../middleware/registerValidation');
const userRouter = express.Router();


userRouter.post ('/register',validateRegister,register);

module.exports = userRouter;
