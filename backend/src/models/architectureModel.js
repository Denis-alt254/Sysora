const { createId, store, saveStore } = require('../config/database')

function saveArchitecture({ projectId, prompt, architecture }) {
  const record = {
    id: createId('arc'),
    projectId,
    prompt,
    architecture,
    version: getProjectArchitectures(projectId).length + 1,
    createdAt: new Date().toISOString(),
  }

  store.architectures.unshift(record)
  saveStore(store)
  return record
}

function getProjectArchitectures(projectId) {
  return store.architectures.filter((record) => record.projectId === projectId)
}

function getArchitectureById(architectureId) {
  return store.architectures.find((record) => record.id === architectureId)
}

module.exports = {
  getArchitectureById,
  getProjectArchitectures,
  saveArchitecture,
}
