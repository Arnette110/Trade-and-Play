const router = require('express').Router()
const playerStatsController = require('../../controllers/playerStatsController')

// Matches with "/api/playerstats"
router.route('/')
  .post(playerStatsController.create)
  .put(playerStatsController.findByIdAndSeason)

router.route('/all')
  .get(playerStatsController.findAll)
// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router
