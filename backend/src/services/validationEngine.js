function validateArchitecture(architecture) {
  const nodes = architecture?.diagram?.nodes || architecture?.nodes || []
  const nodeTypes = nodes.map((node) => node.type)
  const findings = []

  if (!nodeTypes.includes('Cache')) {
    findings.push({
      severity: 'medium',
      title: 'No cache layer detected',
      detail: 'Add Redis or equivalent caching for sessions, hot reads, and collaboration state.',
    })
  }

  if (!nodeTypes.includes('Database')) {
    findings.push({
      severity: 'high',
      title: 'No primary database detected',
      detail: 'The design needs a durable persistence layer for users, projects, and architectures.',
    })
  }

  if (!nodeTypes.includes('Edge')) {
    findings.push({
      severity: 'medium',
      title: 'Missing edge/API gateway',
      detail: 'An API gateway helps with routing, authentication, rate limiting, and observability.',
    })
  }

  findings.push({
    severity: 'low',
    title: 'Review AI-generated decisions',
    detail: 'Generated designs should be reviewed before production implementation.',
  })

  return {
    score: Math.max(62, 96 - findings.length * 8),
    findings,
  }
}

module.exports = {
  validateArchitecture,
}
