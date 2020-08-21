const config = (token) => {
  const config = {
    headers: {
      auth: token,
    },
  };
  return config;
};

module.exports = { config };
