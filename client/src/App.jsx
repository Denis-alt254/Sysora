import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { authLogin, authRegister, fetchProjects, generateArchitecture, saveDiagram, createExport, fetchValidation, fetchCostEstimate, fetchRecommendations } from './api'
import {
  AuthPage,
  DashboardPage,
  WorkspacePage,
  DiagramPage,
  AssistantPage,
  ValidationPage,
  CostsPage,
  ExportPage,
} from './pages'

const initialPrompt =
  'A scalable food delivery platform with live courier tracking, restaurant dashboards, customer apps, payments, analytics, and document exports.'

const projectTemplates = [
  { name: 'Food delivery', description: 'Realtime tracking, payments, partner dashboards' },
  { name: 'SaaS analytics', description: 'Ingestion, dashboards, teams, billing' },
  { name: 'Marketplace', description: 'Listings, booking, chat, reviews, payouts' },
]

function formatExport(design) {
  return `# ${design.project.name}

${design.project.description}

## Architecture
- Pattern: ${design.architecture.pattern}
- Scale: ${design.architecture.scale}
- Structure: ${design.architecture.structure}

## Functional requirements
${design.requirements.functional.map((item) => `- ${item}`).join('\n')}

## Non-functional requirements
${design.requirements.nonFunctional.map((item) => `- ${item}`).join('\n')}

## Validation findings
${design.validation.map((item) => `- ${item.severity}: ${item.title} - ${item.detail}`).join('\n')}

## Cloud cost comparison
${design.costs.map((item) => `- ${item.provider}: $${item.monthly}/mo using ${item.services}`).join('\n')}
`
}

function Sidebar({ activeView, setActiveView }) {
  const views = ['Dashboard', 'Workspace', 'Diagram', 'Assistant', 'Validation', 'Costs', 'Export']

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">S</div>
        <div>
          <span>Sysora</span>
          <strong>System Design Tool</strong>
        </div>
      </div>

      <nav className="nav-list" aria-label="Workspace navigation">
        {views.map((view) => (
          <button className={activeView === view ? 'active' : ''} key={view} onClick={() => setActiveView(view)} type="button">
            {view}
          </button>
        ))}
      </nav>

      <div className="status-panel">
        <span>SRS coverage</span>
        <strong>Design workspace</strong>
        <p>Projects, AI analysis, diagrams, recommendations, validation, cost planning, and exports.</p>
      </div>
    </aside>
  )
}

const blankDesign = {
  project: { name: 'New project' },
  architecture: { nodes: [], edges: [], pattern: '', scale: '' },
  requirements: { functional: [], nonFunctional: [], bottlenecks: [], scalability: 'Medium' },
  recommendations: { frontend: [], backend: [], databases: [], infrastructure: [] },
  validation: [],
  costs: [],
}

function App() {
  const [activeView, setActiveView] = useState('Dashboard')
  const [prompt, setPrompt] = useState(initialPrompt)
  const [design, setDesign] = useState(null)
  const [selectedNodeId, setSelectedNodeId] = useState('core')
  const [isGenerating, setIsGenerating] = useState(false)
  const [user, setUser] = useState(null)
  const [authError, setAuthError] = useState('')
  const [projects, setProjects] = useState([])
  const [currentProject, setCurrentProject] = useState(null)
  const [validation, setValidation] = useState(null)
  const [costs, setCosts] = useState(null)
  const exportText = useMemo(() => (design ? formatExport(design) : ''), [design])

  useEffect(() => {
    const token = localStorage.getItem('sysoraToken')
    const storedUser = localStorage.getItem('sysoraUser')
    if (token && storedUser) {
      setUser(JSON.parse(storedUser))
      fetchProjects().then(setProjects).catch(() => null)
    }
  }, [])

  async function handleLogin(credentials) {
    setAuthError('')
    try {
      const result = await authLogin(credentials)
      localStorage.setItem('sysoraToken', result.token)
      localStorage.setItem('sysoraUser', JSON.stringify(result.user))
      setUser(result.user)
      setProjects(await fetchProjects())
      setActiveView('Workspace')
    } catch (error) {
      setAuthError(error.message)
    }
  }

  async function handleRegister(credentials) {
    setAuthError('')
    try {
      const result = await authRegister(credentials)
      localStorage.setItem('sysoraToken', result.token)
      localStorage.setItem('sysoraUser', JSON.stringify(result.user))
      setUser(result.user)
      setProjects(await fetchProjects())
      setActiveView('Workspace')
    } catch (error) {
      setAuthError(error.message)
    }
  }

  async function generate(event) {
    event.preventDefault()
    if (!user) {
      setAuthError('Please log in to generate an architecture.')
      return
    }

    setIsGenerating(true)

    const payload = {
      prompt,
      projectId: currentProject?.id,
    }

    try {
      const result = await generateArchitecture(payload)
      const normalized = {
        ...blankDesign,
        ...result,
        project: {
          ...blankDesign.project,
          ...result.project,
        },
        architecture: {
          ...blankDesign.architecture,
          ...result.architecture,
          nodes: result.architecture?.nodes || [],
          edges: result.architecture?.edges || [],
        },
        requirements: {
          ...blankDesign.requirements,
          ...result.requirements,
        },
        recommendations: result.recommendations || blankDesign.recommendations,
        validation: result.validation || [],
        costs: result.costs || [],
      }

      setDesign(normalized)
      setSelectedNodeId(normalized.architecture.nodes?.[0]?.id || 'core')
      setCurrentProject(normalized.project)
      setValidation(normalized.requirements)
      setCosts(normalized.costs)
      if (!normalized.recommendations || Object.values(normalized.recommendations).every((value) => !value?.length)) {
        const recommendations = await fetchRecommendations({ prompt })
        setDesign((prev) => ({ ...prev, recommendations }))
      }
      setActiveView('Diagram')
    } catch (error) {
      setAuthError(error.message)
    } finally {
      setIsGenerating(false)
    }
  }
  
  async function runValidation() {
    if (!design) return
    try {
      const res = await fetchValidation({ architecture: design.architecture })
      setDesign((prev) => ({ ...prev, validation: res.findings || [], validationScore: res.score }))
      setActiveView('Validation')
    } catch (err) {
      setAuthError(err.message)
    }
  }

  async function estimateCosts() {
    if (!design) return
    try {
      const res = await fetchCostEstimate({ scale: design.architecture.scale })
      setDesign((prev) => ({ ...prev, costs: res.estimates || [] }))
      setActiveView('Costs')
    } catch (err) {
      setAuthError(err.message)
    }
  }

  async function refreshRecommendations() {
    if (!design) return
    try {
      const rec = await fetchRecommendations({ scale: design.architecture.scale, prompt })
      setDesign((prev) => ({ ...prev, recommendations: rec }))
      setActiveView('Assistant')
    } catch (err) {
      setAuthError(err.message)
    }
  }

  async function saveCurrentDiagram() {
    if (!design || !currentProject) {
      setAuthError('No project selected')
      return
    }
    try {
      await saveDiagram({ projectId: currentProject.id, nodes: design.architecture.nodes, edges: design.architecture.edges })
      setAuthError('Diagram saved')
    } catch (err) {
      setAuthError(err.message)
    }
  }

  async function createExportAction() {
    if (!design?.id) {
      setAuthError('No architecture to export')
      return
    }
    try {
      await createExport({ architectureId: design.id, format: 'markdown' })
      setAuthError('Export created')
    } catch (err) {
      setAuthError(err.message)
    }
  }

  if (!user) {
    return <AuthPage onLogin={handleLogin} onRegister={handleRegister} error={authError} />
  }

  return (
    <main className="app-shell">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <section className="workspace">
        {activeView === 'Dashboard' && <DashboardPage setActiveView={setActiveView} projectTemplates={projectTemplates} />}
        {activeView === 'Workspace' && (
          <WorkspacePage
            design={design || blankDesign}
            generate={generate}
            isGenerating={isGenerating}
            prompt={prompt}
            setActiveView={setActiveView}
            setPrompt={setPrompt}
          />
        )}
        {activeView === 'Diagram' && (
          <DiagramPage
            design={design || blankDesign}
            selectedNodeId={selectedNodeId}
            setDesign={setDesign}
            setSelectedNodeId={setSelectedNodeId}
            onSaveDiagram={saveCurrentDiagram}
            projectId={currentProject?.id}
          />
        )}
        {activeView === 'Assistant' && <AssistantPage design={design || blankDesign} onRefreshRecommendations={refreshRecommendations} />}
        {activeView === 'Validation' && <ValidationPage design={design || blankDesign} onRunValidation={runValidation} />}
        {activeView === 'Costs' && <CostsPage design={design || blankDesign} onEstimateCosts={estimateCosts} />}
        {activeView === 'Export' && <ExportPage exportText={exportText} onCreateExport={createExportAction} />}
      </section>
    </main>
  )
}

export default App
