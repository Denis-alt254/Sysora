function DashboardPage({ setActiveView, projectTemplates }) {
  return (
    <section className="dashboard-grid">
      <article className="hero-panel">
        <p>AI-powered system design platform</p>
        <h1>Design scalable software systems from idea to architecture review.</h1>
        <button className="primary-button" onClick={() => setActiveView('Workspace')} type="button">
          Open workspace
        </button>
      </article>

      <article className="panel">
        <div className="panel-heading">
          <span>Project templates</span>
          <strong>{projectTemplates.length}</strong>
        </div>
        <div className="template-list">
          {projectTemplates.map((template) => (
            <button key={template.name} onClick={() => setActiveView('Workspace')} type="button">
              <strong>{template.name}</strong>
              <span>{template.description}</span>
            </button>
          ))}
        </div>
      </article>

      <article className="panel metric-panel">
        <span>Core modules</span>
        <strong>11</strong>
        <p>Auth, projects, AI analysis, diagrams, stack, database, infra, validation, costs, exports, collaboration.</p>
      </article>
    </section>
  )
}

export default DashboardPage
