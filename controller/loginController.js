const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: "User does not exist." });
        }
        
        const isPassword = await bcrypt.compare( password , user.password);

            if (!isPassword) {
                return res.status(401).json({ msg: "Invalid credential" }); 
            } 
res.status(200).json({ msg: "Login success" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};






























