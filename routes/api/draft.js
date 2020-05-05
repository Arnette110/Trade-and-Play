const router = require('express').Router()
const draftController = require('../../controllers/draftController')

// Matches with "/api/draft"
router.route('/')
  .post(draftController.reduce)

module.exports = router
