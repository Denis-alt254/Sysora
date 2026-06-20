const express = require('express')
const { create, list } = require('../controllers/projectController')
const { requireFields } = require('../middlewares/validateRequest')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.get('/', list)
router.post('/', requireFields(['name']), create)

module.exports = router
