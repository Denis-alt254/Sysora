const { getRecommendations } = require('../services/recommendationEngine')

function recommend(req, res) {
  res.json(getRecommendations(req.body || {}))
}

module.exports = {
  recommend,
}
