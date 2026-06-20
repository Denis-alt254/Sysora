const env = require('../config/env')

function isAllowedOrigin(origin) {
  if (!origin) {
    return true
  }

  if ([env.clientOrigin, ...env.allowedOrigins].includes(origin)) {
    return true
  }

  return /^http:\/\/(localhost|127\.0\.0\.1|192\.168\.\d{1,3}\.\d{1,3}):5173$/.test(origin)
}

function corsMiddleware(req, res, next) {
  const origin = req.headers.origin

  if (isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin || env.clientOrigin)
  }

  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')

  if (req.method === 'OPTIONS') {
    res.sendStatus(204)
    return
  }

  next()
}

module.exports = corsMiddleware
