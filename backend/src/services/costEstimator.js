function estimateCosts(scale = 'Medium') {
  const multiplier = scale === 'High' ? 4 : scale === 'Early-stage' ? 0.45 : 1
  const providers = [
    { provider: 'AWS', base: 620 },
    { provider: 'Google Cloud', base: 580 },
    { provider: 'Azure', base: 640 },
  ]

  return providers.map((item) => ({
    provider: item.provider,
    monthly: Math.round(item.base * multiplier),
    scalingNotes:
      scale === 'High'
        ? 'Budget for Kubernetes nodes, managed database replicas, Redis HA, and observability.'
        : 'Start with managed database, one API container, Redis cache, and object storage.',
  }))
}

module.exports = {
  estimateCosts,
}
