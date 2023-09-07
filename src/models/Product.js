const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_descreption: {
    type: String
  },
  product_price: {  
    type: Number,
    required: true
  },
  product_quantity:{
    type: Number,
    required: true
  },
  product_image: {
    type : String
  },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Product', Schema)