const API_BASE = import.meta.env.VITE_API_BASE || ''

async function request(path, options = {}) {
  const token = localStorage.getItem('sysoraToken')
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'omit',
    ...options,
    headers,
  })

  if (!response.ok) {
    const payload = await response.json().catch(() => null)
    throw new Error(payload?.error || response.statusText)
  }

  return response.json().catch(() => null)
}

export async function authRegister(payload) {
  return request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function authLogin(payload) {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function fetchProjects() {
  return request('/api/projects')
}

export async function createProject(payload) {
  return request('/api/projects', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function generateArchitecture(payload) {
  return request('/api/architectures/generate', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function saveDiagram(payload) {
  return request('/api/diagrams', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function fetchDiagram(projectId) {
  return request(`/api/diagrams/${projectId}/latest`)
}

export async function fetchValidation(payload) {
  return request('/api/validation', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function fetchCostEstimate(payload) {
  return request('/api/costs/estimate', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function fetchRecommendations(payload) {
  return request('/api/recommendations', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function createExport(payload) {
  return request('/api/exports', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function listExports() {
  return request('/api/exports')
}
