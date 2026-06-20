function WorkspacePage({ design, generate, isGenerating, prompt, setPrompt, setActiveView }) {
  const projectName = design?.project?.name || 'New project'
  const architectureScale = design?.architecture?.scale || 'Medium'
  const architecturePattern = design?.architecture?.pattern || ''
  const requirementCount = (design?.requirements?.functional?.length || 0) + (design?.requirements?.nonFunctional?.length || 0)
  const diagramCount = design?.architecture?.nodes?.length || 0
  const validationCount = design?.validation?.length || 0
  const costsCount = design?.costs?.length || 0

  return (
    <>
      <header className="topbar">
        <div>
          <p>Project workspace</p>
          <h1>{projectName}</h1>
        </div>
        <div className="topbar-actions">
          <span>{architectureScale} scale</span>
          <strong>{architecturePattern}</strong>
        </div>
      </header>

      <section className="composer">
        <form onSubmit={generate}>
          <label htmlFor="idea">Application description</label>
          <textarea id="idea" onChange={(event) => setPrompt(event.target.value)} rows="5" value={prompt} />
          <div className="composer-footer">
            <p>Sysora analyzes requirements, creates architecture, prepares diagrams, and checks scalability risks.</p>
            <button className="primary-button" disabled={isGenerating} type="submit">
              {isGenerating ? 'Analyzing...' : 'Analyze system'}
            </button>
          </div>
        </form>
      </section>

      <section className="module-grid">
        {[
          ['Requirements', `${requirementCount} identified`, 'Assistant'],
          ['Diagram editor', `${diagramCount} components`, 'Diagram'],
          ['Validation', `${validationCount} findings`, 'Validation'],
          ['Cost planning', `${costsCount} providers`, 'Costs'],
        ].map(([title, value, view]) => (
          <button className="module-card" key={title} onClick={() => setActiveView(view)} type="button">
            <span>{title}</span>
            <strong>{value}</strong>
          </button>
        ))}
      </section>
    </>
  )
}

export default WorkspacePage
