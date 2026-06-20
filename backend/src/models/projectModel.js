const { createId, store, saveStore } = require('../config/database')

function createProject({ userId = 'demo-user', name, description }) {
  const project = {
    id: createId('prj'),
    userId,
    name,
    description,
    status: 'draft',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  store.projects.unshift(project)
  saveStore(store)
  return project
}

function listProjects(userId = 'demo-user') {
  return store.projects.filter((project) => project.userId === userId)
}

function findProjectById(projectId) {
  return store.projects.find((project) => project.id === projectId)
}

module.exports = {
  createProject,
  findProjectById,
  listProjects,
}
