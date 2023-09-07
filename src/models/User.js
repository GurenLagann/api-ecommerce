const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type : Boolean,
    default: true,
  }

})

module.exports = mongoose.model('User', Schema)