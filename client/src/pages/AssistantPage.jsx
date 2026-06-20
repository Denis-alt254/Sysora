function AssistantPage({ design, onRefreshRecommendations }) {
  if (!design || !design.requirements?.functional?.length) {
    return (
      <section className="panel">
        <div className="panel-heading">
          <span>AI requirement analysis</span>
          <strong>Waiting for architecture</strong>
        </div>
        <p>Generate a project first to view AI requirement recommendations.</p>
      </section>
    )
  }

  return (
    <section className="content-grid">
      <article className="panel">
        <div className="panel-heading">
          <span>AI requirement analysis</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <strong>Functional</strong>
            <button className="ghost-button" type="button" onClick={onRefreshRecommendations}>
              Refresh
            </button>
          </div>
        </div>
        <ul className="check-list">{design.requirements.functional.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="panel">
        <div className="panel-heading">
          <span>Non-functional requirements</span>
          <strong>{design.requirements.scalability || design.architecture.scale}</strong>
        </div>
        <ul className="check-list">{design.requirements.nonFunctional.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="panel wide-panel">
        <div className="panel-heading">
          <span>Technology and infrastructure recommendations</span>
          <strong>Stack plan</strong>
        </div>
        <div className="stack-grid">
          {Object.entries(design.recommendations).map(([key, values]) => (
            <div className="stack-item" key={key}>
              <span>{key}</span>
              <strong>{values.join(', ')}</strong>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}

export default AssistantPage
