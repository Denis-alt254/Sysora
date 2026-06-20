const express = require('express')
const { generate, listByProject } = require('../controllers/architectureController')
const { requireFields } = require('../middlewares/validateRequest')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.post('/generate', requireFields(['prompt']), generate)
router.get('/project/:projectId', listByProject)

module.exports = router
