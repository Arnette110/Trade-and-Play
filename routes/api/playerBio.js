const router = require('express').Router()
const playerBioController = require('../../controllers/playerBioController')

// Matches with "/api/playerbios"
router.route('/')
  .post(playerBioController.create)

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
