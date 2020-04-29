const db = require('../models')

// Defining methods for the playerBioController
module.exports = {
  create: function (req, res) {
    db.PlayerBios
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.PlayerBios
      .findOne({ id: req.body.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByCode: function (req, res) {
    console.log('req: ', req.params)
    db.PlayerBios
      .find({ 'primaryPosition.code': req.params.code })
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
