const Joi=require('joi')


const loginSchema= Joi.object({
    email:Joi.string().email().required().label('Email'),
    password: Joi.string().min(8).required().label('password')
})

exports.validateLogin = (req,res,next)=>{
    const {error}=loginSchema.validate(req.body)
    if(error){
        res.status(400).json({msg:error.details[0].message })

    }
    next()
}



