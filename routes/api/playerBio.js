const router = require('express').Router()
const playerBioController = require('../../controllers/playerBioController')

// Matches with "/api/playerbio"
router.route('/')
  .post(playerBioController.create)
  .put(playerBioController.findById)

router.route('/:code')
  .get(playerBioController.findByCode)

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
