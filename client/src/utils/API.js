const axios = require('axios');

const API = {
    getBook: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?&key=AIzaSyDQcHbPNLRpWvqCjR3cYCQgwCK3Llt09M0&q=${query}`);
    },
    getSavedBooks: function() {
        return axios.get('/api/book');
    },
    saveBook: function(bookObject) {
        return axios.post('/api/book', bookObject);
    }
};

export default API;