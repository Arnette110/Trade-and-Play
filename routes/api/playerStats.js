const router = require('express').Router()
const playerStatsController = require('../../controllers/playerStatsController')

// Matches with "/api/playerstats"
router.route('/')
  .post(playerStatsController.create)
  .put(playerStatsController.findByIdAndSeason)

router.route('/:code')
  .get(playerStatsController.findByCode)

router.route('/all')
  .get(playerStatsController.findAll)

router.route('/collection')
  .get(playerStatsController.getUserCollection)
  .post(playerStatsController.getCollectionData)

module.exports = router
