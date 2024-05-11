const Jwt = require('jsonwebtoken')
const Admin = require('../models/admin')

exports.adminAuth = async(req,res,next)=>{
    const token = req.headers.authorization

    if(!token){
        res.status(401).json({msg:"Access denied. No token "})
    }
    try{
        const decoded = Jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SEC)

        const admin= await Admin.findById(decoded.adminId)

        if (!admin){
            res.json({msg:"Admin account not found"})
        }

        req.admin=admin

        next()

    }catch(error){
        console.error('Error verifying token:', error.message);
        res.status(401).json({ message: 'Invalid token' });
    }
}
