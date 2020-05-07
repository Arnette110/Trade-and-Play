const db = require('../models')

// Defining methods for the playerController
module.exports = {
  reduce: function (req, res) {
    switch (req.body.pickType.pick) {
      case 'first':
        db.User
          .findOneAndUpdate({}, { $inc: { firstPick: -1 } })
          .catch(err => res.status(422).json(err))
        break
      case 'third':
        db.User
          .findOneAndUpdate({}, { $inc: { thirdPick: -1 } })
          .catch(err => res.status(422).json(err))
        break
      case 'fifth':
        db.User
          .findOneAndUpdate({}, { $inc: { fifthPick: -1 } })
          .catch(err => res.status(422).json(err))
        break
    }
  },
  pushToCollection: function (req, res) {
    const userId = req.body.user_id
    const cardId = req.body.card
    db.User
      .findOneAndUpdate({ _id: userId }, { $push: { card: cardId } })
      .then(dbModel => res.status(200).json(dbModel))
  }
}
