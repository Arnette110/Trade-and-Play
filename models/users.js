var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  sub: String,
  card: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
})

module.exports = mongoose.model('User', userSchema)
