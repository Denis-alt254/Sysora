const { createId, store, saveStore } = require('../config/database')

function ensureDiagramStore() {
  if (!store.diagrams) {
    store.diagrams = []
  }
}

function saveDiagram({ projectId, nodes, edges }) {
  ensureDiagramStore()

  const diagram = {
    id: createId('dia'),
    projectId,
    nodes,
    edges,
    updatedAt: new Date().toISOString(),
  }

  store.diagrams.unshift(diagram)
  saveStore(store)
  return diagram
}

function getLatestDiagram(projectId) {
  ensureDiagramStore()
  return store.diagrams.find((diagram) => diagram.projectId === projectId)
}

module.exports = {
  getLatestDiagram,
  saveDiagram,
}
