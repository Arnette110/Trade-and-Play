const db = require('../models')

// Defining methods for the playerController
module.exports = {
  create: function (req, res) {
    db.PlayerStats
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findByIdAndSeason: function (req, res) {
    const { id, season } = req.body
    db.PlayerStats
      .findOne({ id: id, season: season })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findAll: function (req, res) {
    db.PlayerStats
      .find({})
      .populate('bio')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  populateBio: function (req, res) {
    db.PlayerStats
      .findOneAndUpdate({ _id: '5eab21f824c9e7ab82a93de5' }, { $push: { bio: '5eab21f824c9e7ab82a93de9' } })
      .populate('bio')
      .then(dbStats => {
        console.log('PSC: ', dbStats)

        res.json(dbStats)
      })
  }
}
