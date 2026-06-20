const { createId, store } = require('../config/database')

function ensureCollaborationStore() {
  if (!store.comments) {
    store.comments = []
  }
}

function addComment({ projectId, author = 'Reviewer', message, targetId = 'workspace' }) {
  ensureCollaborationStore()

  const comment = {
    id: createId('cmt'),
    projectId,
    targetId,
    author,
    message,
    createdAt: new Date().toISOString(),
  }

  store.comments.unshift(comment)
  return comment
}

function listComments(projectId) {
  ensureCollaborationStore()
  return store.comments.filter((comment) => comment.projectId === projectId)
}

module.exports = {
  addComment,
  listComments,
}
