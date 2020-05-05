const db = require('../models')

// Defining methods for the playerController
module.exports = {
  reduce: function (req, res) {
    console.log('in reduce method', req.body.pickType.pick)
    switch (req.body.pickType.pick) {
      case 'first':
        db.User
          .findOneAndUpdate({}, { $inc: { firstPick: -1 } })
          .then(dbModel => console.log(dbModel))
          .catch(err => res.status(422).json(err))
        break
      case 'third':
        db.User
          .findOneAndUpdate({}, { $inc: { thirdPick: -1 } })
          .then(dbModel => console.log(dbModel))
          .catch(err => res.status(422).json(err))
        break
      case 'fifth':
        db.User
          .findOneAndUpdate({}, { $inc: { fifthPick: -1 } })
          .then(dbModel => console.log(dbModel))
          .catch(err => res.status(422).json(err))
        break
    }
  }
}
