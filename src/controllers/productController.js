const Product = require('../models/Product')

const ProductController = {
  async createProduct(req, res) {
    const bodyData = req.body
    const { user_id } = req.params

    try {
      const data = { username: user_id, ...bodyData }
      const newProduct = await Product.create(data)
      await newProduct.populate('username')

      return res.status(201).json(newProduct)

    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async getAllProducts(req, res) {
    try {
      const products = await Product.find()
      return res.status(200).json(products)

    } catch (error) {
      return res.status(400).json(error)

    }
  },

  async getUserProduct(req, res) {
    const { user_id } = req.params

    try {
      const productOfAnUser = await Product.find({ username: user_id })
      return res.status(200).json(productOfAnUser)

    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async getProductById(req, res) {
    const { product_id } = req.params

    try {
      const ProductById = await Product.findById(product_id)
      return res.status(200).json(ProductById)

    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async productUpdated(req, res) {

    const { product_id } = req.params
    const bodyData = req.body

    try {

      const updateProduct = await Product.findByIdAndUpdate(product_id, bodyData, { new: true })
      return res.status(200).json(updateProduct)

    } catch (error) {
      return res.status(400).json(error)

    }
  },

  async deleteProduct(req, res) {

    const { product_id } = req.params

    try {
      const deleteProduct = await Product.findByIdAndRemove(product_id)
      return res.status(200).json(deleteProduct)

    } catch (error) {
      return res.status(400).json(error)

    }
  },
}

module.exports = ProductController