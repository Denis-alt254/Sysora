const bcrypt = require('bcrypt')
const { createId, store, saveStore } = require('../config/database')
const db = require('../config/db')

const useDb = db.useDb

async function createUser({ name, email, password }) {
  const normalizedEmail = email.toLowerCase()

  if (!password) {
    throw new Error('Password is required')
  }

  if (useDb) {
    // check existing
    const existing = await db.query('SELECT id FROM users WHERE email = $1', [normalizedEmail])
    if (existing.rowCount > 0) return null

    const passwordHash = await bcrypt.hash(password, 10)
    const id = createId('usr')
    const createdAt = new Date().toISOString()
    await db.query(
      'INSERT INTO users(id, name, email, password_hash, role, created_at) VALUES($1,$2,$3,$4,$5,$6)',
      [id, name, normalizedEmail, passwordHash, 'member', createdAt],
    )

    return toPublicUser({ id, name, email: normalizedEmail, role: 'member', createdAt })
  }

  const existingUser = await findUserByEmail(normalizedEmail)

  if (existingUser) {
    return null
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = {
    id: createId('usr'),
    name,
    email: normalizedEmail,
    passwordHash,
    role: 'member',
    createdAt: new Date().toISOString(),
  }

  store.users.push(user)
  saveStore(store)
  return toPublicUser(user)
}

async function findUserByEmail(email) {
  const normalized = email.toLowerCase()
  if (useDb) {
    const res = await db.query('SELECT id, name, email, role, created_at FROM users WHERE email = $1', [normalized])
    if (res.rowCount === 0) return null
    const row = res.rows[0]
    return { id: row.id, name: row.name, email: row.email, role: row.role, createdAt: row.created_at }
  }

  return store.users.find((user) => user.email === normalized)
}

async function findUserById(id) {
  if (useDb) {
    const res = await db.query('SELECT id, name, email, role, created_at FROM users WHERE id = $1', [id])
    if (res.rowCount === 0) return null
    const row = res.rows[0]
    return { id: row.id, name: row.name, email: row.email, role: row.role, createdAt: row.created_at }
  }

  return store.users.find((user) => user.id === id)
}

async function verifyUser(email, password) {
  const normalized = email.toLowerCase()
  if (useDb) {
    const res = await db.query('SELECT id, name, email, role, password_hash, created_at FROM users WHERE email = $1', [normalized])
    if (res.rowCount === 0) return null
    const row = res.rows[0]
    const isValid = await bcrypt.compare(password, row.password_hash)
    if (!isValid) return null
    return { id: row.id, name: row.name, email: row.email, role: row.role, createdAt: row.created_at }
  }

  const user = await findUserByEmail(email)

  if (!user || !password) {
    return null
  }

  const isValid = await bcrypt.compare(password, user.passwordHash)
  return isValid ? toPublicUser(user) : null
}

function toPublicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  }
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  verifyUser,
  toPublicUser,
}
