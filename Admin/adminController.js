const Admin = require('../models/admin');
const bcrypt = require('bcrypt');

exports.adminRegister = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = new Admin({
            username: username,
            email: email,
            password: hashedPassword
        });
        const createdAdmin = await newAdmin.save();

        res.status(201).json(createdAdmin);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
    console.log('Admin created successfully ')
};

