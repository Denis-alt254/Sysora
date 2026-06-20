const express = require('express')
const { create, list } = require('../controllers/exportController')
const { requireFields } = require('../middlewares/validateRequest')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.get('/', list)
router.post('/', requireFields(['architectureId']), create)

module.exports = router
