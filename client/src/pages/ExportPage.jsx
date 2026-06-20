function ExportPage({ exportText, onCreateExport }) {
  return (
    <section className="panel export-panel">
      <div className="panel-heading">
        <span>Documentation and export</span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <strong>Markdown report</strong>
          <button className="primary-button" onClick={() => onCreateExport?.()} type="button">
            Create export
          </button>
        </div>
      </div>
      <textarea readOnly value={exportText} />
    </section>
  )
}

export default ExportPage
