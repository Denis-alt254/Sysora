function authorizeOwnership(resourceOwnerField) {
  return (req, res, next) => {
    const resourceOwnerId = req.body[resourceOwnerField] || req.params[resourceOwnerField]

    if (!resourceOwnerId) {
      res.status(400).json({ error: 'Resource identifier is required.' })
      return
    }

    if (req.user?.id !== resourceOwnerId) {
      res.status(403).json({ error: 'Forbidden: you do not own this resource.' })
      return
    }

    next()
  }
}

module.exports = {
  authorizeOwnership,
}
