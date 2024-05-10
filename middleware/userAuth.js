const Jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.userAuth = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = Jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SEC);

        // Extract user information from the decoded token
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Attach the user information to the request object
        req.user = user;

        next();
    } catch (error) {
        console.error('Error verifying token:', error.message);
        res.status(401).json({ message: 'Invalid token' });
    }
};
