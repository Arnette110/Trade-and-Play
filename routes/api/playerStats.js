const router = require('express').Router()
const playerStatsController = require('../../controllers/playerStatsController')

// Matches with "/api/playerstats"
router.route('/')
  .post(playerStatsController.create)
  .put(playerStatsController.findByIdAndSeason)

router.route('/all')
  .get(playerStatsController.findAll)

router.route('/collection')
  .post(playerStatsController.getCollectionData)

router.route('/collection/:username')
  .get(playerStatsController.getUserCollection)

router.route('/draft/first/:position')
  .get(playerStatsController.draftFive)

router.route('/draft/:code')
  .get(playerStatsController.findByCode)

module.exports = router
