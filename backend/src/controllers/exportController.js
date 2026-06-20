const { getArchitectureById } = require('../models/architectureModel')
const { createExport, listExports } = require('../models/exportModel')
const { findProjectById } = require('../models/projectModel')
const { formatArchitectureMarkdown } = require('../services/exportFormatter')

function create(req, res) {
  const { architectureId, format = 'markdown' } = req.body
  const record = getArchitectureById(architectureId)

  if (!record) {
    res.status(404).json({ error: 'Architecture not found.' })
    return
  }

  const project = findProjectById(record.projectId)

  if (!project || project.userId !== req.user.id) {
    res.status(404).json({ error: 'Architecture not found.' })
    return
  }

  if (format !== 'markdown') {
    res.status(400).json({ error: 'Only markdown export is available in this MVP.' })
    return
  }

  const exportRecord = createExport({
    architectureId,
    format,
    content: formatArchitectureMarkdown(record.architecture),
  })

  res.status(201).json(exportRecord)
}

function list(req, res) {
  const exportsForUser = listExports().filter((exportRecord) => {
    const architecture = getArchitectureById(exportRecord.architectureId)
    const project = architecture ? findProjectById(architecture.projectId) : null
    return project && project.userId === req.user.id
  })

  res.json(exportsForUser)
}

module.exports = {
  create,
  list,
}
