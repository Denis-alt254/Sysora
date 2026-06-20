const dotenv = require('dotenv')
const path = require('path')

const envFile = path.resolve(process.cwd(), '.env')
const srcEnvFile = path.resolve(__dirname, '..', '.env')

if (dotenv.config({ path: envFile }).parsed) {
  // loaded root .env
} else {
  dotenv.config({ path: srcEnvFile })
}

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 4200,
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  allowedOrigins: (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean),
  jwtSecret: process.env.JWT_SECRET || 'sysora-demo-secret',
  databaseUrl: process.env.DATABASE_URL || null,
}

module.exports = env
