const Admin = require('./models/admin');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
const User=require('../models/User')
const { Product } = require('../Admin/models/Product');

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



exports.adminLogin = async (req, res) => {
    const { email, password, username } = req.body;

    try {

        if (!email && !username) {
            return res.status(400).json({ message: 'Email or username is required' });
        }

        const admin = await Admin.findOne({ $or: [{ email }, { username }] });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        if(!password){
            return res.status(402).json({msg:"Password is required"})
        }

        
        const isPasswordCorrect = await bcrypt.compare(password, admin.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

       
        const accessToken = jwt.sign({ adminId: admin._id }, process.env.JWT_SEC, { expiresIn: '6000s' })
        
        res.status(200).json({ message: 'Admin login successful', accessToken });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.adminBanUser= async (req,res)=>{
    const userId = req.params._id;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user's status to banned
        user.banned = true;

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'User banned successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}





exports.addProduct = async (req, res) => {
    try {
        const { name, description, price, size, color } = req.body;
        
       
        const newProduct = new Product({
            name,
            description,
            price,
            size,
            color
        });

        const createdProduct = await newProduct.save();
        
        res.status(201).json(createdProduct);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
