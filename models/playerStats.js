const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    id: {
        type: Number,
        required: "Must have a player ID"
    },
    season: {
        type: Number,
        required: "Must have a season"
    },
    stat: {
        type: Object,
        required: "Must have stats"
    }
});

const PlayerStats = mongoose.model("PlayerStats", playerSchema);

module.exports = PlayerStats;
