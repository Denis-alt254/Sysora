const fs = require('fs')
const path = require('path')

const dataDir = path.resolve(__dirname, '..', '..', 'data')
const storePath = path.join(dataDir, 'store.json')

const defaultStore = {
  users: [],
  projects: [],
  architectures: [],
  exports: [],
  diagrams: [],
  comments: [],
}

function ensureDataDirectory() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

function loadStore() {
  ensureDataDirectory()

  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, JSON.stringify(defaultStore, null, 2), 'utf8')
    return JSON.parse(JSON.stringify(defaultStore))
  }

  try {
    const content = fs.readFileSync(storePath, 'utf8')
    const parsed = JSON.parse(content)
    return Object.assign({}, defaultStore, parsed)
  } catch (error) {
    fs.writeFileSync(storePath, JSON.stringify(defaultStore, null, 2), 'utf8')
    return JSON.parse(JSON.stringify(defaultStore))
  }
}

function saveStore(store) {
  ensureDataDirectory()
  fs.writeFileSync(storePath, JSON.stringify(store, null, 2), 'utf8')
}

const store = loadStore()

module.exports = {
  store,
  saveStore,
}
