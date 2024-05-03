const express = require('express');
const { login } = require('../controller/userController');
// const { loginTracker } = require('../middleware/loginTracker');

const loginRouter = express.Router();


loginRouter.post('/user/login',login)



module.exports = {loginRouter};