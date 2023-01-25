const jwt = require("jsonwebtoken");

module.exports = authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET);
    req.user = jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    res.status(400).json({
      authMessage: "You are not authenticated. Please login!",
    });
  }
};
