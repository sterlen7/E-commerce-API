const express = require('express');
const { register } = require('../controller/registerController');
const { validateRegister } = require('../middleware/registerValidation');
// const { validateUpdateProfile } = require('../middleware/updateProfile');
// const { updateProfile } = require('../controller/userController');
const userRouter = express.Router();


userRouter.post ('/register',validateRegister,register);
// userRouter.put('/profile/update',validateUpdateProfile,updateProfile)

module.exports = userRouter;
