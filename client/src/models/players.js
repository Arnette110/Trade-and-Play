const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    id: {
        type: Number,
        required: "Must have a player ID"
    },
    fullName: {
        type: String,
        trim: true,
        required: "Enter a name"
    },
    profileLink: {
        link: "/api/v1/people/8480839",
        required: "Must have profile link"
    },
    ImageLink: {
        link: "",
        required: "Must have profile link"
    },
    season: {
        type: Number,
        required: "Must have a season"
    },
    // Stats start here
    timeOnIce: {
        type: String
    },
    assists: {
        type: Number
    },
    goals: {
        type: Number
    },
    pim: {
        type: Number
    },
    shots: {
        type: Number
    },
    games: {
        type: Number
    },
    hits: {
        type: Number
    },
    powerPlayGoals: {
        type: Number
    },
    powerPlayPoints: {
        type: Number
    },
    powerPlayTimeOnIce: {
        type: String
    },
    evenTimeOnIce: {
        type: String
    },
    penaltyMinutes: {
        type: String
    },
    faceOffPct: {
        type: Number
    },
    shotPct: {
        type: Number
    },
    gameWinningGoals: {
        type: Number
    },
    overTimeGoals: {
        type: Number
    },
    shortHandedGoals: {
        type: Number
    },
    shortHandedPoints: {
        type: Number
    },
    shortHandedTimeOnIce: {
        type: String
    },
    blocked: {
        type: Number
    },
    plusMinus: {
        type: Number
    },
    points: {
        type: Number
    },
    shifts: {
        type: Number
    },
    timeOnIcePerGame: {
        type: String
    },
    evenTimeOnIcePerGame: {
        type: String
    },
    shortHandedTimeOnIcePerGame: {
        type: String
    },
    powerPlayTimeOnIcePerGame: {
        type: String
    },
});

const PlayerStats = mongoose.model("PlayerStats", playerSchema);

module.exports = PlayerStats;
