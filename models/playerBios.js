const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playerBioSchema = new Schema({
    id: {
        type: Number,
        required: "Must have a player ID"
    },
    fullName: {
        type: String,
        required: "Must have a player fullName"
    },
    link: {
        type: String,
    },
    firstName: {
        type: String,
        required: "Must have a player fullName"
    },
    lastName: {
        type: String,
        required: "Must have a player fullName"
    },
    primaryNumber: {
        type: String,
    },
    birthDate: {
        type: String,
    },
    currentAge: {
        type: Number,
    },
    birthCity: {
        type: String,
    },
    birthCountry: {
        type: String,
    },
    nationality: {
        type: String,
    },
    height: {
        type: String,
    },
    weight: {
        type: Number,
    },
    active: {
        type: Boolean,
    },
    alternateCaptain: {
        type: Boolean,
    },
    captain: {
        type: Boolean,
    },
    rookie: {
        type: Boolean,
    },
    shootsCatches: {
        type: String,
    },
    rosterStatus: {
        type: String,
    },
    currentTeam: {
        type: Object,
    },
    primaryPosition: {
        type: Object,
    },
});

const PlayerBios = mongoose.model("PlayerBios", playerBioSchema);

module.exports = PlayerBios;
