const { createProject, listProjects } = require('../models/projectModel')

function create(req, res) {
  const project = createProject({
    userId: req.user.id,
    name: req.body.name,
    description: req.body.description || '',
  })

  res.status(201).json(project)
}

function list(req, res) {
  res.json(listProjects(req.user.id))
}

module.exports = {
  create,
  list,
}
