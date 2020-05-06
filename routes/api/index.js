const router = require('express').Router()
const playerStatsRoutes = require('./playerStats')
const draftRoutes = require('./draft')
const userRoute = require('./user')

// players routes
router.use('/playerstats', playerStatsRoutes)
router.use('/draft', draftRoutes)
router.use('/user', userRoute)


module.exports = router
