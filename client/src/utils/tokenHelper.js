const jwt = require("jsonwebtoken");

const generateToken = userId => {
  const token = {
    sessionToken: signjwt(userId),
  };
  return token;
};

const signjwt = userId => {
  return jwt.sign(
    {
      data: userId,
    },
    'ziggyStardust',
    { expiresIn: "7d" }
  );
};

const verifyToken = tokenValue => {
  return jwt.verify(tokenValue, 'ziggyStardust');
};

module.exports = { generateToken, verifyToken };