const Cart = require('../models/Cart')

const CartController = {
  async createCart(req, res) {
    const { user_id } = req.params
    const bodyData = req.body

    try {
      const createdCart = await Cart.create({ ...bodyData, username: user_id })
      return res.status(201).json(createdCart)
      
    } catch (error) {
      return res.status(400).json(error)

    }
  },

  async getAllCarts(req, res) {
    try {
      const carts = await Cart.find()
        .populate('username')
        .populate('products')
      return res.status(200).json(carts)
    } catch (error) {
      return res.status(400).json(error)

    }
  },

  async getUserCart(req, res) {
    const { user_id } = req.params

    try {
      const userCart = await Cart.find({ username: user_id })
        .populate('username')
        .populate('products')
      return res.status(200).json(userCart)

    } catch (error) {
      return res.status(400).json(error)

    }

  },
  async getCartById(req, res) {
    const { cart_id } = req.params

    try {
      const idCart = await Cart.findById(cart_id)
        .populate('username')
        .populate('products')
      return res.status(200).json(idCart)

    } catch (error) {
      return res.status(400).json(error)

    }

  },
  async deleteCart(req, res) {
    const { cart_id } = req.params

    try {
      const deleteCart = await Cart.findByIdAndRemove(cart_id)
      return res.status(200).json(deleteCart)

    } catch (error) {
      return res.status(400).json(error)

    }
  }
}

module.exports = CartController