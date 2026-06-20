const capabilities = {
  realtime: ['chat', 'tracking', 'collaboration', 'notifications', 'live', 'realtime', 'real-time'],
  payments: ['payment', 'checkout', 'subscription', 'billing', 'invoice'],
  media: ['video', 'image', 'photo', 'upload', 'stream', 'document', 'file'],
  marketplace: ['marketplace', 'seller', 'buyer', 'vendor', 'booking'],
  analytics: ['analytics', 'dashboard', 'report', 'metrics', 'insight'],
  enterprise: ['enterprise', 'large scale', 'millions', 'global', 'multi region', 'high traffic'],
}

function hasAny(source, words) {
  return words.some((word) => source.includes(word))
}

function pickPattern(prompt) {
  if (hasAny(prompt, capabilities.enterprise)) {
    return 'Modular microservices'
  }

  if (hasAny(prompt, ['mvp', 'startup', 'prototype', 'small team'])) {
    return 'Modular monolith'
  }

  return 'Service-oriented modular monolith'
}

function estimateScale(prompt) {
  if (hasAny(prompt, capabilities.enterprise)) {
    return 'High'
  }

  if (hasAny(prompt, ['team', 'startup', 'marketplace', 'realtime', 'real-time', 'booking'])) {
    return 'Medium'
  }

  return 'Early-stage'
}

function buildNodes(prompt) {
  const nodes = [
    { id: 'client', label: 'Web App', type: 'Frontend', x: 6, y: 42 },
    { id: 'gateway', label: 'API Gateway', type: 'Edge', x: 27, y: 42 },
    { id: 'api', label: 'Core API', type: 'Backend', x: 48, y: 42 },
    { id: 'db', label: 'PostgreSQL', type: 'Database', x: 70, y: 26 },
    { id: 'cache', label: 'Redis Cache', type: 'Cache', x: 70, y: 58 },
    { id: 'ai', label: 'AI Orchestrator', type: 'AI', x: 48, y: 75 },
  ]

  if (hasAny(prompt, capabilities.realtime)) {
    nodes.push({ id: 'realtime', label: 'Realtime Service', type: 'WebSocket', x: 27, y: 72 })
  }

  if (hasAny(prompt, capabilities.payments)) {
    nodes.push({ id: 'payments', label: 'Payment Provider', type: 'External', x: 88, y: 42 })
  }

  if (hasAny(prompt, capabilities.media)) {
    nodes.push({ id: 'storage', label: 'Object Storage', type: 'Storage', x: 88, y: 72 })
  }

  if (hasAny(prompt, capabilities.analytics)) {
    nodes.push({ id: 'analytics', label: 'Analytics Pipeline', type: 'Data', x: 88, y: 14 })
  }

  return nodes
}

function buildEdges(nodes) {
  const ids = new Set(nodes.map((node) => node.id))
  const edges = [
    ['client', 'gateway'],
    ['gateway', 'api'],
    ['api', 'db'],
    ['api', 'cache'],
    ['api', 'ai'],
  ]

  if (ids.has('realtime')) edges.push(['client', 'realtime'], ['realtime', 'cache'], ['realtime', 'api'])
  if (ids.has('payments')) edges.push(['api', 'payments'])
  if (ids.has('storage')) edges.push(['api', 'storage'])
  if (ids.has('analytics')) edges.push(['api', 'analytics'], ['analytics', 'db'])

  return edges.map(([from, to]) => ({ from, to }))
}

function generateArchitecture(rawPrompt) {
  const prompt = rawPrompt.toLowerCase()
  const pattern = pickPattern(prompt)
  const scale = estimateScale(prompt)
  const nodes = buildNodes(prompt)

  const services = [
    'Authentication and user profiles',
    'Project and architecture management',
    'AI requirement analysis and architecture generation',
    'Diagram persistence and export workflow',
  ]

  if (hasAny(prompt, capabilities.realtime)) services.push('Realtime events over WebSockets')
  if (hasAny(prompt, capabilities.payments)) services.push('Payments, billing, and webhook processing')
  if (hasAny(prompt, capabilities.media)) services.push('Media upload, storage, and delivery')
  if (hasAny(prompt, capabilities.analytics)) services.push('Usage analytics and reporting')

  return {
    name: rawPrompt.slice(0, 72),
    summary: `A ${pattern.toLowerCase()} architecture for a ${scale.toLowerCase()} product, optimized for quick delivery while keeping clear upgrade paths for scale.`,
    pattern,
    scale,
    structure: pattern === 'Modular microservices' ? 'Split by domain modules with API gateway and shared services.' : 'Modular monolith with clear service boundaries for later extraction.',
    stack: {
      frontend: 'React workspace with diagram canvas',
      backend: 'Node.js API with service modules',
      database: 'PostgreSQL for relational product data',
      cache: 'Redis for sessions, queues, and hot diagram state',
      infrastructure: 'Containerized deployment behind an API gateway',
    },
    services,
    diagram: {
      nodes,
      edges: buildEdges(nodes),
    },
    risks: [
      'AI output should be reviewed before implementation decisions are finalized.',
      'Diagram state can become complex; versioned architecture snapshots are important.',
      'Cost estimation needs provider-specific pricing before production use.',
    ],
    recommendations: [
      'Start with a modular monolith and extract services once team or traffic pressure is real.',
      'Keep generated architectures as structured JSON so diagrams, docs, and exports share one source.',
      'Add audit logs early for architecture changes and export events.',
    ],
    monthlyEstimate: scale === 'High' ? '$900 - $2,800' : scale === 'Medium' ? '$180 - $650' : '$45 - $160',
  }
}

module.exports = {
  generateArchitecture,
}
