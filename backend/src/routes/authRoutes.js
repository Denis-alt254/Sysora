const express = require('express')
const { login, register } = require('../controllers/authController')
const { requireFields } = require('../middlewares/validateRequest')

const router = express.Router()

router.post('/register', requireFields(['name', 'email', 'password']), register)
router.post('/login', requireFields(['email', 'password']), login)

module.exports = router
