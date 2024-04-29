const express = require('express');
const { login } = require('../controller/loginController');
const { loginTracker } = require('../middleware/loginTracker');

const loginRouter = express.Router();


loginRouter.post('/login',loginTracker,login)
loginRouter.put('/login:id')


module.exports = {loginRouter};