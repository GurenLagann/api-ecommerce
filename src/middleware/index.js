const jwt = require('jsonwebtoken')

const middlewares = {
  authenticate(req, res, next) {
    const { authorization } = req.headers
    const token = authorization && authorization.split(' ')[1]

    console.log(authorization)

    if (!authorization) return res.status(400).json({ "message": "No token" })

    try {
      const secret = process.env.SECRET
      jwt.verify(token, secret)

      next()

    } catch (error) {
      return res.status(400).json({ "message": "not allowed" })
    }
  }
}

module.exports = middlewares