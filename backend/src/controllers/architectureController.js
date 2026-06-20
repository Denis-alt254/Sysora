const { saveArchitecture, getProjectArchitectures } = require('../models/architectureModel')
const { createProject, findProjectById } = require('../models/projectModel')
const { generateArchitecture } = require('../services/architectureGenerator')
const { analyzeRequirements } = require('../services/requirementAnalyzer')

function generate(req, res) {
  const prompt = String(req.body.prompt || '').trim()

  if (prompt.length < 12) {
    res.status(400).json({ error: 'Describe the product in at least 12 characters.' })
    return
  }

  let projectId = req.body.projectId
  let project

  if (!projectId) {
    project = createProject({
      userId: req.user.id,
      name: prompt.slice(0, 48),
      description: prompt,
    })
    projectId = project.id
  } else {
    project = findProjectById(projectId)

    if (!project) {
      res.status(404).json({ error: 'Project not found.' })
      return
    }

    if (project.userId !== req.user.id) {
      res.status(403).json({ error: 'Forbidden: project does not belong to you.' })
      return
    }
  }

  const generated = generateArchitecture(prompt)
  const architecture = {
    name: generated.name,
    summary: generated.summary,
    pattern: generated.pattern,
    scale: generated.scale,
    stack: generated.stack,
    services: generated.services,
    risks: generated.risks,
    recommendations: generated.recommendations,
    monthlyEstimate: generated.monthlyEstimate,
    nodes: generated.diagram.nodes,
    edges: generated.diagram.edges,
  }
  const requirements = analyzeRequirements(prompt)
  const record = saveArchitecture({ projectId, prompt, architecture })

  res.status(201).json({
    project: {
      id: project.id,
      name: project.name,
      description: project.description,
    },
    requirements,
    architecture,
    id: record.id,
    projectId,
    version: record.version,
    createdAt: record.createdAt,
  })
}

function listByProject(req, res) {
  const project = findProjectById(req.params.projectId)

  if (!project || project.userId !== req.user.id) {
    res.status(404).json({ error: 'Project not found.' })
    return
  }

  res.json(getProjectArchitectures(req.params.projectId))
}

module.exports = {
  generate,
  listByProject,
}
