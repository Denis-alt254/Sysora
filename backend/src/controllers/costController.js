const { estimateCosts } = require('../services/costEstimator')

function estimate(req, res) {
  res.json({
    scale: req.body.scale || 'Medium',
    estimates: estimateCosts(req.body.scale || 'Medium'),
  })
}

module.exports = {
  estimate,
}
