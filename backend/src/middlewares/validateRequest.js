function requireFields(fields) {
  return (req, res, next) => {
    const missingFields = fields.filter((field) => !String(req.body?.[field] || '').trim())

    if (missingFields.length > 0) {
      res.status(400).json({
        error: 'Missing required fields.',
        fields: missingFields,
      })
      return
    }

    next()
  }
}

module.exports = {
  requireFields,
}
