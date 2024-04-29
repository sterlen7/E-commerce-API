const LoginTrack = require('../models/login');

exports.loginTracker = async (req, res, next) => {
  try {
    if (!req.user || !req.user._id) {
        console.error('User object or _id property is undefined');
        return next();
      }
   
    await LoginTrack.create({
      user: req.user._id, 
      success: true 
    });

    next();
  } catch (error) {
    console.error('Error tracking login:', error);
    next(error);
  }
};


