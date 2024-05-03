const Joi = require('joi');

    const updateSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        // username:Joi.string().username().required()
    });

    exports.validateUpdateProfile = (req, res, next) => {
    const { error } = updateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
