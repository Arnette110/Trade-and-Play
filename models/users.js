var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = mongoose.Schema({
  local: {
    email: String,
    password: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    card: [
      {
        playerId: Number,
        season: String
      }
    ]
  }
})

userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('User', userSchema)

//  {
//       type: String,
//       unique: true,
//       match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
//     },
