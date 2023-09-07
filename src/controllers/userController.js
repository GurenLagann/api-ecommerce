const bcrypt = require('bcrypt')

const User = require('../models/User')

const UserController = {

  async createUser(req, res) {
    const { name, email, password, status } = req.body

    const verifyEmail = await User.findOne({email: email})

    try {
      if (!email) {
        return res.sendStatus(204).json({ "message": "No Content" });
      }

      if(verifyEmail){
        if (verifyEmail.email === email) {
          return res.status(501).json({ "error": "This user already exists" })
        }
      }

      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(password, salt)

      const user = await User.create({ name, email, password: passwordHash, status })
      return res.status(201).json(user)

    } catch (error) {
      console.log(error)
      return res.status(400).json(error)
    }
  },

  async getAllUsers(req, res) {
    try {
      const users = await User.find()
      return res.status(200).json(users)
    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async getUserById(req, res) {
    const { user_id } = req.params
    try {
      const user = await User.findById(user_id)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  },

  async userUpdated(req, res) {
    const { user_id } = req.params
    const bodyData = req.body

    try {

      const userUpdated = await Product.findByIdAndUpdate(product_id, bodyData, { new: true })
      return res.status(200).json(userUpdated)      
    } catch (error) {
      return res.status(400).json(error)

    }
    
  },

  async deleteUser(req, res) {
    const { user_id } = req.params
    try {
      await User.findByIdAndRemove(user_id)
      return res.status(200).json(user_id + ": The user has been deleted")
    } catch (error) {
      return res.status(400).json(error)
    }
  },
}

module.exports = UserController