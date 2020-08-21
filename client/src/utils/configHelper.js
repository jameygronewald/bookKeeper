const authConfig = (token) => {
  const config = {
    headers: {
      auth: token,
    },
  };
  return config;
};

module.exports = { authConfig };
