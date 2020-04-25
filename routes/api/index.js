const router = require('express').Router()
const playerStatsRoutes = require('./playerStats')
const playerBioRoutes = require('./playerBio')

// players routes
router.use('/playerstats', playerStatsRoutes)
router.use('/playerbio', playerBioRoutes)

module.exports = router
