const router = require('express').Router()
const playerStatsRoutes = require('./playerStats')
const draftRoutes = require('./draft')

// players routes
router.use('/playerstats', playerStatsRoutes)
router.use('/draft', draftRoutes)

module.exports = router
