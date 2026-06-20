function ValidationPage({ design, onRunValidation }) {
  if (!design || !design.validation?.length) {
    return (
      <section className="panel">
        <div className="panel-heading">
          <span>Validation</span>
          <strong>No validation yet</strong>
        </div>
        <p>Generate an architecture first to see validation findings and bottlenecks.</p>
        <div style={{ marginTop: 12 }}>
          <button className="primary-button" type="button" onClick={onRunValidation}>
            Run validation
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="content-grid">
      <article className="panel">
        <div className="panel-heading">
          <span>Scalability and bottlenecks</span>
          <strong>{design.validation.length} findings</strong>
        </div>
        <ul className="risk-list">
          {design.validation.map((item) => (
            <li key={item.title}>
              <strong>{item.severity}: {item.title}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </article>
      <article className="panel">
        <div className="panel-heading">
          <span>Detected bottlenecks</span>
          <strong>Review</strong>
        </div>
        <ul className="check-list">{design.requirements.bottlenecks.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
    </section>
  )
}

export default ValidationPage
