const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
  id: { type: Number, required: true },
  season: { type: Number, required: true },
  stat: { type: Object, required: true }
})

const PlayerStats = mongoose.model('PlayerStats', playerSchema)

module.exports = PlayerStats
