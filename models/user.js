const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = new mongoose.Schema({
    google: {
        id: {
          type: String
        },
        name: {
          type: String,
          default: ''
        },
        gender: {
          type: String,
          default: ''
        },
        occupation: {
          type: String,
          default: ''
        },
        dob: {
          type: String,
          default: ''
        },
        relationshipStatus: {
          type: String,
          default: ''
        },
        profileUrl: {
          type: String,
          default: ''
        }
    }
});

module.exports = mongoose.model('users', userSchema);