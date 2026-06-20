function includesAny(source, terms) {
  return terms.some((term) => source.includes(term))
}

function analyzeRequirements(prompt) {
  const source = prompt.toLowerCase()
  const functional = ['User authentication', 'Project management', 'Architecture generation', 'Diagram editing']
  const nonFunctional = ['Responsive UI', 'Secure data handling', 'Fast architecture generation']
  const bottlenecks = []

  if (includesAny(source, ['payment', 'billing', 'checkout'])) {
    functional.push('Payment processing and webhook handling')
    nonFunctional.push('Reliable transaction processing')
  }

  if (includesAny(source, ['chat', 'live', 'tracking', 'realtime', 'real-time'])) {
    functional.push('Real-time updates')
    nonFunctional.push('Low-latency event delivery')
    bottlenecks.push('WebSocket fan-out and hot Redis channels can become pressure points.')
  }

  if (includesAny(source, ['upload', 'image', 'video', 'document', 'file'])) {
    functional.push('Media upload and object storage')
    bottlenecks.push('Large file uploads need direct-to-storage flows and CDN caching.')
  }

  if (includesAny(source, ['analytics', 'reports', 'metrics', 'dashboard'])) {
    functional.push('Analytics and reporting')
    bottlenecks.push('Reporting queries should be isolated from transactional workloads.')
  }

  return {
    functional,
    nonFunctional,
    scalability: includesAny(source, ['global', 'millions', 'enterprise', 'high traffic']) ? 'High' : 'Medium',
    bottlenecks:
      bottlenecks.length > 0
        ? bottlenecks
        : ['Database write contention and unbounded AI requests need early guardrails.'],
  }
}

module.exports = {
  analyzeRequirements,
}
