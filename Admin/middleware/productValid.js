
const Joi = require('joi');

const productValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    size: Joi.string().required(),
    color: Joi.string().required()
});


exports.validateProduct = (req, res, next) => {
    const { error } = productValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};



