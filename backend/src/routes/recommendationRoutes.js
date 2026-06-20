const express = require('express')
const { recommend } = require('../controllers/recommendationController')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.post('/', recommend)

module.exports = router
