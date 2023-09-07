const mongoose = require('mongoose')
const user = require('./User')

const Schema = new mongoose.Schema({
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  address: {
    street: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  },
  payment: {
    card: {
      number: {
        type: String,
        required: true
      },
      cvc: {
        type: Number,
        required: true
      },
      due_date: {
        type: Date,
        required: true
      }
    }
  },
})

module.exports = mongoose.model('Cart', Schema)