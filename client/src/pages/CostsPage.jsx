function CostsPage({ design, onEstimateCosts }) {
  if (!design || !design.costs?.length) {
    return (
      <section className="panel">
        <div className="panel-heading">
          <span>Cloud provider cost comparison</span>
          <strong>No cost estimates yet</strong>
        </div>
        <p>Generate an architecture to populate provider cost estimates.</p>
        <div style={{ marginTop: 12 }}>
          <button className="primary-button" type="button" onClick={onEstimateCosts}>
            Estimate costs
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="panel">
      <div className="panel-heading">
        <span>Cloud provider cost comparison</span>
        <strong>{design.architecture.scale} scale</strong>
      </div>
      <div className="cost-grid">
        {design.costs.map((item) => (
          <div className="cost-card" key={item.provider}>
            <span>{item.provider}</span>
            <strong>${item.monthly}/mo</strong>
            <p>{item.services}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CostsPage
