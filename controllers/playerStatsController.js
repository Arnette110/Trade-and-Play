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
    console.log('you are in the backend getUserCollection fx')
    db.User
      .find({})
      .then(userModel => res.json(userModel[0].card))
  },
  getCollectionData: function (req, res) {
    const cardDataArr = []
    const collectionArray = req.body
    collectionArray.map(el => {
      // ID WILL NEED TO BE CHANGED TO _ID
      const id = el
      db.PlayerStats
        .find({ id: id })
        .then(cardData => {
          cardDataArr.push(cardData)
        })
    })
    // NEED TO RESOLVE .MAP BEFORE RETURNING JSON
    setTimeout(() => { res.json(cardDataArr) }, 3000)
    // .then(() => res.json(cardDataArr))
    // .catch(err => res.status(422).json(err))
    // setTimeout(() => { console.log('cardDataArr: ', cardDataArr) }, 3000)
  },
  findByCode: function (req, res) {
    db.PlayerStats
      .find({ 'bio.primaryPosition.type': req.params.code })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
