const { createId, store, saveStore } = require('../config/database')

function createExport({ architectureId, format, content }) {
  const exportRecord = {
    id: createId('exp'),
    architectureId,
    format,
    content,
    createdAt: new Date().toISOString(),
  }

  store.exports.unshift(exportRecord)
  saveStore(store)
  return exportRecord
}

function listExports() {
  return store.exports
}

module.exports = {
  createExport,
  listExports,
}
