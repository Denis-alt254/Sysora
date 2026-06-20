const { Pool } = require('pg')
const env = require('./env')

const databaseUrl = process.env.DATABASE_URL || env.databaseUrl || null

let pool = null
const useDb = Boolean(databaseUrl)

if (useDb) {
  pool = new Pool({ connectionString: databaseUrl })
}

async function query(text, params) {
  if (!useDb) {
    throw new Error('Database not configured')
  }
  const client = await pool.connect()
  try {
    const res = await client.query(text, params)
    return res
  } finally {
    client.release()
  }
}

async function init() {
  if (!useDb) return

  // Create minimal tables if they don't exist
  await query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT,
      role TEXT,
      created_at TIMESTAMP WITH TIME ZONE
    );
  `)

  await query(`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      name TEXT,
      description TEXT,
      status TEXT,
      created_at TIMESTAMP WITH TIME ZONE,
      updated_at TIMESTAMP WITH TIME ZONE
    );
  `)

  await query(`
    CREATE TABLE IF NOT EXISTS architectures (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL,
      prompt TEXT,
      architecture JSONB,
      version INTEGER,
      created_at TIMESTAMP WITH TIME ZONE
    );
  `)

  await query(`
    CREATE TABLE IF NOT EXISTS diagrams (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL,
      nodes JSONB,
      edges JSONB,
      updated_at TIMESTAMP WITH TIME ZONE
    );
  `)

  await query(`
    CREATE TABLE IF NOT EXISTS exports (
      id TEXT PRIMARY KEY,
      architecture_id TEXT NOT NULL,
      format TEXT,
      content TEXT,
      created_at TIMESTAMP WITH TIME ZONE
    );
  `)

  await query(`
    CREATE TABLE IF NOT EXISTS comments (
      id TEXT PRIMARY KEY,
      project_id TEXT NOT NULL,
      target_id TEXT,
      author TEXT,
      message TEXT,
      created_at TIMESTAMP WITH TIME ZONE
    );
  `)
}

module.exports = {
  useDb,
  pool,
  query,
  init,
}
