// const Joi =require('joi')

// const registerSchema = Joi.object({
//     email: Joi.string().email().required().label('Email'),
//     password: Joi.string().min(8).required().label('password'),
//     username: Joi.string().required().label('User name')
// })

// exports.validateRegister = (req, res, next) => {
//     const { error } = registerSchema.validate(req.body);
//     if (error) {
//       return res.status(400).json({ message: error.details[0].message });
//     }
//     next(); 
//  };


