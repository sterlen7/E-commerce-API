const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')

exports.login = async (req, res) => {
    const { email, password,username} = req.body;

    try {
        if (!email && !username) {
            return res.status(400).json({ message: 'Email or username is required' });
        }

        if(!password){
            return res.status(400).json({msg:'Password is required'})
        }
        const user = await User.findOne({ $or: [{ email }, { username }] });
     
       
        if (!user) {
            return res.json({ message: "User does not exist. Sign up!" });
        }
        
        const isPassword = await bcrypt.compare( password , user.password);

            if (!isPassword) {
                return res.status(401).json({ msg: "Invalid credential" }); 
            } 

            if(user.banned){
                return res.status(405).json({msg:"You have been banned contact your admin"})
            }

        const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SEC, { expiresIn: '6000s' });


res.status(200).json({ msg: "Login success",accessToken});

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


exports.userUpdate = async (req, res) => {
    const userId = req.user.id;
    const { username, email, newPassword, address } = req.body;

    try {
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (username) user.username = username;
        if (email) user.email = email;
        if (newPassword) user.password = await bcrypt.hash(newPassword, 10);
        if (address) user.address = address;

        await user.save();

        return res.status(200).json({ message: 'User details updated successfully' });
    } catch (error) {
        console.error('Error updating user details:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

