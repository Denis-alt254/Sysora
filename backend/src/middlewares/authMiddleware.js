const jwt = require('jsonwebtoken')
const env = require('../config/env')
const { findUserById } = require('../models/userModel')

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    res.status(401).json({ error: 'Authentication required.' })
    return
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret)
    const user = findUserById(payload.userId)

    if (!user) {
      res.status(401).json({ error: 'Invalid authentication token.' })
      return
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired authentication token.' })
  }
}

module.exports = {
  authenticate,
}
