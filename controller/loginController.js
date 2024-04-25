// const User = require('../models/User');
// const bcrypt = require('bcrypt');

// exports.login= async(res,req)=>{
//     const  {username,email,password}= req.body

//     try{
//         const user =await User.findOne({username})
//         if(!user){
//             return res.json({message:"User does not exist."})
//         }

//         const userEmail=await User.findOne({email})
//         if(!userEmail){
//             return res.json({message:"email does not exist."})
//         }

//         const  userPassword =await bcrypt.compare({password})
//         if(!userPassword){
//             return res.json({message:"wrong password"})
//         }
//     }catch{
    
//     }
// }