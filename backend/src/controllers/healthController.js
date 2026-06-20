function getHealth(req, res) {
  res.json({
    ok: true,
    service: 'sysora-api',
    version: '1.0.0',
  })
}

module.exports = {
  getHealth,
}
