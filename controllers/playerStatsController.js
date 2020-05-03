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
  getUserCollection: function (req, res) {
    db.User
      .find({})
      .then(userModel => res.json(userModel[0].card))
  },
  getCollectionData: async function (req, res) {
    const cardDataArr = []
    for (let i = 0; i < req.body.length; i++) {
      const id = req.body[i]
      const pstats = await db.PlayerStats
        .findOne({ id: id })
      cardDataArr.push(pstats)
    }
    res.json(cardDataArr)
  },
  findByCode: function (req, res) {
    db.PlayerStats
      .find({ 'bio.primaryPosition.type': req.params.code })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  draftFive: function (req, res) {
    console.log('in draftFive fx')
    const draftContent = []
    for (let i = 0; i < 5; i++) {
      db.PlayerStats.count().exec(function (err, count) {
        if (err) {
          console.log('error: ', err)
        }
        const random = Math.floor(Math.random() * count)
        db.PlayerStats.findOne().skip(random).exec(
          function (err, result) {
            if (err) {
              console.log('error: ', err)
            }
            draftContent.push(result)
            console.log(result._id)
          })
      })
    }
    console.log(draftContent)
  }
}
