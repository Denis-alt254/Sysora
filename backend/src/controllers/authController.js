const { createUser, verifyUser } = require('../models/userModel')

const jwt = require('jsonwebtoken')
const env = require('../config/env')

async function register(req, res) {
  const { name, email, password } = req.body
  const user = await createUser({ name, email, password })

  if (!user) {
    res.status(409).json({ error: 'A user with that email already exists.' })
    return
  }

  const token = jwt.sign({ userId: user.id }, env.jwtSecret, { expiresIn: '12h' })

  res.status(201).json({
    user,
    token,
  })
}

async function login(req, res) {
  const { email, password } = req.body
  const user = await verifyUser(email, password)

  if (!user) {
    res.status(401).json({ error: 'Invalid email or password.' })
    return
  }

  const token = jwt.sign({ userId: user.id }, env.jwtSecret, { expiresIn: '12h' })

  res.json({
    user,
    token,
  })
}

module.exports = {
  login,
  register,
}
