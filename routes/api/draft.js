const router = require('express').Router()
const draftController = require('../../controllers/draftController')

// Matches with "/api/draft"
router.route('/')
  .post(draftController.reduce)

router.route('/add')
  .post(draftController.pushToCollection)

module.exports = router
