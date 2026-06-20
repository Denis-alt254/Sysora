const express = require('express')
const { latest, save } = require('../controllers/diagramController')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.get('/:projectId/latest', latest)
router.post('/', save)

module.exports = router
