const router = require('express').Router()
const playerRoutes = require('./players')

// players routes
router.use('/players', playerRoutes)

module.exports = router
