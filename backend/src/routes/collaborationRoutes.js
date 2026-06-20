const express = require('express')
const { createComment, getComments } = require('../controllers/collaborationController')
const { requireFields } = require('../middlewares/validateRequest')
const { authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(authenticate)
router.get('/:projectId/comments', getComments)
router.post('/comments', requireFields(['message']), createComment)

module.exports = router
