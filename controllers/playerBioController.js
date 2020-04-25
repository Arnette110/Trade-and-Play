const db = require('../models')

// Defining methods for the playerBioController
module.exports = {
  create: function (req, res) {
    db.PlayerBios
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOne: function (req, res) {
    db.PlayerBios
      .findOne({ id: req.body.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
