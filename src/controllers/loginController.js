const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const LoginController = {

  async createSession(req, res) {
    const { email, password } = req.body

    try {

      if (!email) return res.status(401).json({ error: 'Email is required' })
      if (!password) return res.status(401).json({ error: 'Password is required' })

      const user = await User.findOne({ email: email })
      if (!user) return res.status(401).json({ error: "User not Found" })

      const checkPassword = await bcrypt.compare(password, user.password)
      if (!checkPassword) return res.status(401).json({ error: "Invalid Password" })


      const secret = process.env.SECRET
      const token = jwt.sign({
        id: user._id
      },
        secret,
      )
      return res.status(200).json({ "message": "Login successful", token })

    } catch (error) {
      return res.status(400).json(error)
    }
  },
}


module.exports = LoginController