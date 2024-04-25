const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword
        });
        const createdUser = await newUser.save();

        res.status(201).json(createdUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

