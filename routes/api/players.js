const router = require('express').Router()
const playerController = require('../../controllers/playerController')

// Matches with "/api/players"
router.route('/')
  .post(playerController.create)

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
