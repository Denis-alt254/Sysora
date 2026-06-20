const express = require('express')
const { estimate } = require('../controllers/costController')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.post('/estimate', estimate)

module.exports = router
