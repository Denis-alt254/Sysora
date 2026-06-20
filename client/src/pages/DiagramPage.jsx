function DiagramPage({ design, selectedNodeId, setDesign, setSelectedNodeId, onSaveDiagram, projectId }) {
  if (!design || !design.architecture?.nodes?.length) {
    return (
      <section className="panel">
        <div className="panel-heading">
          <span>Diagram editor</span>
          <strong>No architecture generated yet</strong>
        </div>
        <p>Use the workspace to generate an architecture before editing the diagram.</p>
      </section>
    )
  }

  const nodeMap = Object.fromEntries(design.architecture.nodes.map((node) => [node.id, node]))
  const selectedNode = nodeMap[selectedNodeId] || design.architecture.nodes[0]

  function updateNode(field, value) {
    setDesign((current) => ({
      ...current,
      architecture: {
        ...current.architecture,
        nodes: current.architecture.nodes.map((node) => (node.id === selectedNode.id ? { ...node, [field]: value } : node)),
      },
    }))
  }

  function nudgeNode(dx, dy) {
    setDesign((current) => ({
      ...current,
      architecture: {
        ...current.architecture,
        nodes: current.architecture.nodes.map((node) =>
          node.id === selectedNode.id
            ? { ...node, x: Math.max(2, Math.min(88, node.x + dx)), y: Math.max(8, Math.min(82, node.y + dy)) }
            : node,
        ),
      },
    }))
  }

  function addService() {
    const id = `service-${Date.now().toString(36)}`
    setDesign((current) => ({
      ...current,
      architecture: {
        ...current.architecture,
        nodes: [
          ...current.architecture.nodes,
          { id, label: 'New Service', type: 'Service', x: 44, y: 18, details: 'Describe ownership, data, APIs, and scaling needs.' },
        ],
        edges: [...current.architecture.edges, { from: 'gateway', to: id }],
      },
    }))
    setSelectedNodeId(id)
  }

  return (
    <section className="split-workspace">
      <article className="panel diagram-panel">
        <div className="panel-heading">
          <span>Interactive diagram builder</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="ghost-button" onClick={addService} type="button">
              Add service
            </button>
            <button className="primary-button" onClick={() => onSaveDiagram?.()} type="button">
              Save diagram
            </button>
          </div>
        </div>
        <div className="diagram">
          <svg className="diagram-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            {design.architecture.edges.map((edge) => {
              const from = nodeMap[edge.from]
              const to = nodeMap[edge.to]
              if (!from || !to) return null
              return <line key={`${edge.from}-${edge.to}`} x1={from.x + 5} x2={to.x + 5} y1={from.y + 4} y2={to.y + 4} />
            })}
          </svg>
          {design.architecture.nodes.map((node) => (
            <button
              className={`diagram-node ${node.type.toLowerCase()} ${selectedNode?.id === node.id ? 'selected' : ''}`}
              key={node.id}
              onClick={() => setSelectedNodeId(node.id)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              type="button"
            >
              <span>{node.type}</span>
              {node.label}
            </button>
          ))}
        </div>
      </article>

      <aside className="panel inspector">
        <div className="panel-heading">
          <span>Inspector</span>
          <strong>{selectedNode?.type}</strong>
        </div>
        <label>
          Label
          <input onChange={(event) => updateNode('label', event.target.value)} value={selectedNode?.label || ''} />
        </label>
        <label>
          Type
          <select onChange={(event) => updateNode('type', event.target.value)} value={selectedNode?.type || 'Service'}>
            {['Client', 'Edge', 'Service', 'Database', 'Cache', 'AI', 'Realtime', 'External', 'Storage', 'Data'].map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>
          Details
          <textarea onChange={(event) => updateNode('details', event.target.value)} rows="5" value={selectedNode?.details || ''} />
        </label>
        <div className="nudge-grid">
          <button onClick={() => nudgeNode(0, -5)} type="button">Up</button>
          <button onClick={() => nudgeNode(-5, 0)} type="button">Left</button>
          <button onClick={() => nudgeNode(5, 0)} type="button">Right</button>
          <button onClick={() => nudgeNode(0, 5)} type="button">Down</button>
        </div>
      </aside>
    </section>
  )
}

export default DiagramPage
