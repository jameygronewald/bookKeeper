const axios = require("axios");

const API = {
  signUpUser: function (user) {
    return axios.post("/signup", user);
  },
  loginUser: function (user) {
    return axios.post("/login", user);
  },
  getUserLibrary: function (config) {
    return axios.get("/api/user", config);
  },
  getBooks: function (query) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?&key=AIzaSyDQcHbPNLRpWvqCjR3cYCQgwCK3Llt09M0&q=${query}`
    );
  },
  saveBook: function (bookObject, config) {
    return axios.post("/api/book", bookObject, config);
  },
};

export default API;
