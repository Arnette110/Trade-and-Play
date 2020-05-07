var mongoose = require('mongoose')
var bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

var userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 15
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin'],
    required: true
  },
  card: [{ type: Schema.Types.ObjectId, ref: 'PlayerStats' }],
  firstPick: {
    type: Number,
    default: 10
  },
  thirdPick: {
    type: Number,
    default: 10
  },
  fifthPick: {
    type: Number,
    default: 10
  },
  profileImage: {
    type: String
  },
  favoriteTeam: {
    type: String,
    default: 'Seattle Kraken'
  },
  bio: {
    type: String,
    default: 'I enjoy long walks on the beach, Starbucks, CSS, and unicorns'
  }
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) { return next() }
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if (err) { return next(err) }
    this.password = passwordHash
    next()
  })
})

userSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    } else {
      if (!isMatch) {
        return cb(null, isMatch)
      } else {
        return cb(null, this)
      }
    }
  })
}

module.exports = mongoose.model('User', userSchema)

//  {
//       type: String,
//       unique: true,
//       match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//     },
