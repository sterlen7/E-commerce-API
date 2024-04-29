
const mongoose = require('mongoose');

const loginTrackSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  },
  success: {
    type: Boolean,
    required: true
  }
});

exports.loginTrack = mongoose.model('LoginTrack', loginTrackSchema);


