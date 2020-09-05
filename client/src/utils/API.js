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
      `https://www.googleapis.com/books/v1/volumes?&key=${process.env.API_KEY}&q=${query}`
    );
  },
  saveBook: function (bookObject, config) {
    return axios.post("/api/book", bookObject, config);
  },
  deleteBook: function (bookId, config) {
    return axios.delete("/api/book/" + bookId, config);
  },
};

export default API;
