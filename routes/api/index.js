const router = require('express').Router()
const playerStatsRoutes = require('./playerStats')

// players routes
router.use('/playerstats', playerStatsRoutes)
module.exports = router
