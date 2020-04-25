const db = require('../models')

// Defining methods for the playerStatsController
module.exports = {
  create: function (req, res) {
    db.PlayerStats
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findOne: function (req, res) {
    db.PlayerStats
      .findOne({ id: req.body.id, season: req.body.season })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
