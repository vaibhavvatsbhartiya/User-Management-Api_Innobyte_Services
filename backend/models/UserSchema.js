
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false }
});


module.exports = mongoose.model('User', userSchema);
