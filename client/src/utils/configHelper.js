const config = token => {
  const config = {
    headers: {
      auth: localStorage.getItem("sessionToken"),
    },
  };
  return config;
};

module.exports = { config };
