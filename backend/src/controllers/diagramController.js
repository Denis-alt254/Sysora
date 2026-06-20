const { getLatestDiagram, saveDiagram } = require('../models/diagramModel')
const { findProjectById } = require('../models/projectModel')

function save(req, res) {
  const projectId = req.body.projectId
  const project = findProjectById(projectId)

  if (!project || project.userId !== req.user.id) {
    res.status(404).json({ error: 'Project not found.' })
    return
  }

  const diagram = saveDiagram({
    projectId,
    nodes: req.body.nodes || [],
    edges: req.body.edges || [],
  })

  res.status(201).json(diagram)
}

function latest(req, res) {
  const project = findProjectById(req.params.projectId)

  if (!project || project.userId !== req.user.id) {
    res.status(404).json({ error: 'Project not found.' })
    return
  }

  const diagram = getLatestDiagram(req.params.projectId)
  res.json(diagram || null)
}

module.exports = {
  latest,
  save,
}
