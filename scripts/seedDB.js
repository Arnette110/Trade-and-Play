const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/tradeandplay"
);

const playerSeed = [
    {
        id: 8447400,
        fullName: "Wayne Gretsky",
        profileLink: "/api/v1/people/8447400/",
        season: 19841985
    },
    {
        id: 8447400,
        fullName: "Wayne Gretsky",
        profileLink: "/api/v1/people/8447400/",
        season: 19841985
    },
]

db.PlayerStats.remove({})
  .then(() => db.PlayerStats.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
