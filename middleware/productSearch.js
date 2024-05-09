const Joi = require('joi')

const searchSchema = Joi.object({
    name: Joi.string().required().label('Product name')
});


exports.validSearch= (req,res,next)=>{
    const {error}= searchSchema.validate(req.query)
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
      }
      next(); 

}