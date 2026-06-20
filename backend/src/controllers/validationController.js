const { validateArchitecture } = require('../services/validationEngine')

function validate(req, res) {
  res.json(validateArchitecture(req.body.architecture || req.body))
}

module.exports = {
  validate,
}
