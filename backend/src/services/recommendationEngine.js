function getRecommendations(context = {}) {
  const scale = context.scale || 'Medium'

  return {
    frontend: ['React', 'React Flow for diagrams', 'Zustand-style workspace state'],
    backend: scale === 'High' ? ['Node.js API Gateway', 'Service modules', 'Async workers'] : ['Node.js modular API'],
    databases: ['PostgreSQL for core records', 'Redis for sessions, cache, and collaboration events'],
    infrastructure: [
      'Docker containers',
      'API gateway with rate limiting',
      scale === 'High' ? 'Kubernetes horizontal scaling' : 'Single container deployment with upgrade path',
      'Object storage for exported diagrams and reports',
    ],
    communication: ['REST for CRUD APIs', 'WebSockets for collaboration and live diagram sync'],
  }
}

module.exports = {
  getRecommendations,
}
