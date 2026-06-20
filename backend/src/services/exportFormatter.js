function formatArchitectureMarkdown(architecture) {
  return `# ${architecture.name}

${architecture.summary}

Pattern: ${architecture.pattern}
Scale: ${architecture.scale}
Estimated monthly cost: ${architecture.monthlyEstimate}

## Core services
${architecture.services.map((service) => `- ${service}`).join('\n')}

## Recommended stack
${Object.entries(architecture.stack)
  .map(([key, value]) => `- ${key}: ${value}`)
  .join('\n')}

## Recommendations
${architecture.recommendations.map((item) => `- ${item}`).join('\n')}

## Risks
${architecture.risks.map((risk) => `- ${risk}`).join('\n')}
`
}

module.exports = {
  formatArchitectureMarkdown,
}
