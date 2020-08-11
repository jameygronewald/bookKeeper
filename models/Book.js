const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Book name is required.',
  },
  author: {
    type: String,
    trim: true,
    required: 'Author is required.',
  },
  description: {
    type: String,
    trim: true,
    required: 'Description is required.',
  },
  coverURL: {
      type: String,
      trim: true,
      required: 'Cover image is required.'
  }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;