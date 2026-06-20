function notFoundHandler(req, res) {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
  })
}

function errorHandler(err, req, res, next) {
  if (err instanceof SyntaxError && 'body' in err) {
    res.status(400).json({ error: 'Request body must be valid JSON.' })
    return
  }

  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    error: err.message || 'Internal server error',
  })
}

module.exports = {
  errorHandler,
  notFoundHandler,
}
