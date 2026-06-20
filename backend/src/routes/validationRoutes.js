const express = require('express')
const { validate } = require('../controllers/validationController')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.post('/', validate)

module.exports = router
