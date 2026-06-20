const express = require('express')
const env = require('./config/env')
const corsMiddleware = require('./middlewares/corsMiddleware')
const { errorHandler, notFoundHandler } = require('./middlewares/errorMiddleware')
const routes = require('./routes')

const { init: initDb } = require('./config/db')

const app = express()

app.use(corsMiddleware)
app.use(express.json({ limit: '1mb' }))
app.use(routes)
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(env.port, () => {
  console.log(`Sysora API listening on http://localhost:${env.port}`)
})

// initialize DB migrations asynchronously
initDb().catch((err) => {
  console.error('Failed to initialize database:', err)
})
