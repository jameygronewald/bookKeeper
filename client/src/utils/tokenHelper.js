const jwt = require("jsonwebtoken");

const generateToken = userId => {
  const token = {
    token: signjwt(userId),
  };
  return token;
};

const signjwt = userId => {
  return jwt.sign(
    {
      data: userId,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

const verifyToken = tokenValue => {
  return jwt.verify(tokenValue, process.env.JWT_SECRET);
};

module.exports = { generateToken, verifyToken };