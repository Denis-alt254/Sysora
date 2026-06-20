const { addComment, listComments } = require('../models/collaborationModel')
const { findProjectById } = require('../models/projectModel')

function createComment(req, res) {
  const project = findProjectById(req.body.projectId)

  if (!project || project.userId !== req.user.id) {
    res.status(404).json({ error: 'Project not found.' })
    return
  }

  const comment = addComment({
    projectId: req.body.projectId,
    targetId: req.body.targetId,
    author: req.user.name,
    message: req.body.message,
  })

  res.status(201).json(comment)
}

function getComments(req, res) {
  const project = findProjectById(req.params.projectId)

  if (!project || project.userId !== req.user.id) {
    res.status(404).json({ error: 'Project not found.' })
    return
  }

  res.json(listComments(req.params.projectId))
}

module.exports = {
  createComment,
  getComments,
}
