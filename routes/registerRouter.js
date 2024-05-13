const express = require('express');
const { register } = require('../controller/registerController');
const { validateRegister } = require('../middleware/registerValidation');
const regRouter = express.Router();


regRouter.post ('/register',validateRegister,register);


module.exports = regRouter;
