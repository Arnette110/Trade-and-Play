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
  // populateBio: function (req, res) {
  //   db.PlayerStats
  //     .findOneAndUpdate({ _id: '5eab21f824c9e7ab82a93de5' }, { $push: { bio: '5eab21f824c9e7ab82a93de9' } })
  //     .populate('bio')
  //     .then(dbStats => {
  //       console.log('PSC: ', dbStats)

  //       res.json(dbStats)
  //     })
  // },
  getUserCollection: function (req, res) {
    console.log('you are in the backend getUserCollection fx')
    db.User
      .find({})
      .then(userModel => res.json(userModel[0].card))
  },
  getCollectionData: function (req, res) {
    const cardDataArr = []
    // console.log('You are in the backend getCollectionData fx')
    const collectionArray = req.body
    console.log('collectionArray', collectionArray)
    // loop through collectionArray
    collectionArray.map(el => {
      // console.log('el: ', el)
      const id = el
      db.PlayerStats
        .find({ id: id })
        .then(cardData => {
          cardDataArr.push(cardData)
          console.log('finished collecting card data: ', cardData)
        })
    })
    // .then(() => res.json(cardDataArr))
    // .catch(err => res.status(422).json(err))
    // setTimeout(() => { console.log('cardDataArr: ', cardDataArr) }, 3000)
  }
}
