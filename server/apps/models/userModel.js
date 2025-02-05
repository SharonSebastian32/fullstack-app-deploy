 // models/userModel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\d{10}$/, 'is invalid'],
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  }
}, { 
  timestamps: true 
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
