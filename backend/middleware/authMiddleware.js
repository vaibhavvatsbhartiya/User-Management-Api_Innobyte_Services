
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');

const authMiddleware = async (req, res, next) => {
  // const token = req.header('Authorization').replace('Bearer ', '').split(" ")[1] ;
  const token = req.header('Authorization').split(" ")[1] ;
  

  console.log(token);

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  // console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
