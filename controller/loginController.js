const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')

exports.login = async (req, res) => {
    const { email, password,username} = req.body;

    try {
        const user = await User.findOne({ $or: [{ email }, { username }] });
     
       
        if (!user) {
            return res.json({ message: "User does not exist. Sign up!" });
        }
        
        const isPassword = await bcrypt.compare( password , user.password);

            if (!isPassword) {
                return res.status(401).json({ msg: "Invalid credential" }); 
            } 

const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SEC, { expiresIn: '6000s' });


res.status(200).json({ msg: "Login success",accessToken});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};




  
        // if (!email || !username||!password){
        //     return res.json ({msg:"Please input your login details"})
        // }

























