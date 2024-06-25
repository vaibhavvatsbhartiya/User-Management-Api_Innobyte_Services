

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, otpLogin, getUserProfile, updateUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// User registration endpoint
router.post('/register', registerUser);
 
// User login endpoint
router.post('/login', loginUser);

// OTP-based login endpoint
router.post('/otp-login', otpLogin);

// Fetch user profile endpoint
router.get('/profile', authMiddleware, getUserProfile);

// Update user profile endpoint
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;
