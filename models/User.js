const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: 'First name is a required field.',
  },
  lastName: {
    type: String,
    trim: true,
    required: 'Last name is a required field.',
  },
  email: {
    type: String,
    required: 'Email is a required field.',
  },
  password: {
      type: String,
      trim: true,
      required: 'Password is a required field.'
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;