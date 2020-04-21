const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tradeandplay'
)

const playerSeed = [
  {
    id: 8474600,
    season: '20182019',
    stat: {
      timeOnIce: '2063:34',
      assists: 41,
      goals: 15,
      pim: 42,
      shots: 274,
      games: 82,
      hits: 53,
      powerPlayGoals: 2,
      powerPlayPoints: 12,
      powerPlayTimeOnIce: '244:30',
      evenTimeOnIce: '1606:42',
      penaltyMinutes: '42',
      faceOffPct: 0.0,
      shotPct: 5.5,
      gameWinningGoals: 4,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 1,
      shortHandedTimeOnIce: '212:22',
      blocked: 144,
      plusMinus: 9,
      points: 56,
      shifts: 2359,
      timeOnIcePerGame: '25:09',
      evenTimeOnIcePerGame: '19:35',
      shortHandedTimeOnIcePerGame: '02:35',
      powerPlayTimeOnIcePerGame: '02:58'
    }
  },
  {
    id: 8473419,
    season: '20182019',
    stat: {
      timeOnIce: '1550:16',
      assists: 64,
      goals: 36,
      pim: 96,
      shots: 231,
      games: 79,
      hits: 46,
      powerPlayGoals: 10,
      powerPlayPoints: 34,
      powerPlayTimeOnIce: '249:57',
      evenTimeOnIce: '1176:21',
      penaltyMinutes: '96',
      faceOffPct: 42.85,
      shotPct: 15.6,
      gameWinningGoals: 9,
      overTimeGoals: 3,
      shortHandedGoals: 3,
      shortHandedPoints: 7,
      shortHandedTimeOnIce: '123:58',
      blocked: 19,
      plusMinus: 15,
      points: 100,
      shifts: 1821,
      timeOnIcePerGame: '19:37',
      evenTimeOnIcePerGame: '14:53',
      shortHandedTimeOnIcePerGame: '01:34',
      powerPlayTimeOnIcePerGame: '03:09'
    }
  },
  {
    id: 8478427,
    season: '20182019',
    stat: {
      timeOnIce: '1652:22',
      assists: 53,
      goals: 30,
      pim: 26,
      shots: 243,
      games: 82,
      hits: 65,
      powerPlayGoals: 3,
      powerPlayPoints: 24,
      powerPlayTimeOnIce: '246:05',
      evenTimeOnIce: '1314:53',
      penaltyMinutes: '26',
      faceOffPct: 48.58,
      shotPct: 12.3,
      gameWinningGoals: 7,
      overTimeGoals: 3,
      shortHandedGoals: 4,
      shortHandedPoints: 5,
      shortHandedTimeOnIce: '91:24',
      blocked: 34,
      plusMinus: 25,
      points: 83,
      shifts: 2008,
      timeOnIcePerGame: '20:09',
      evenTimeOnIcePerGame: '16:02',
      shortHandedTimeOnIcePerGame: '01:06',
      powerPlayTimeOnIcePerGame: '03:00'
    }
  },
  {
    id: 8476945,
    season: '20182019',
    stat: {
      timeOnIce: '3704:06',
      ot: 3,
      shutouts: 2,
      ties: 0,
      wins: 34,
      losses: 23,
      saves: 1872,
      powerPlaySaves: 274,
      shortHandedSaves: 57,
      evenSaves: 1541,
      shortHandedShots: 62,
      evenShots: 1675,
      powerPlayShots: 314,
      savePercentage: 0.913,
      goalAgainstAverage: 2.89949,
      games: 63,
      gamesStarted: 62,
      shotsAgainst: 2051,
      goalsAgainst: 179,
      timeOnIcePerGame: '58:47',
      powerPlaySavePercentage: 87.26114649681529,
      shortHandedSavePercentage: 91.93548387096774,
      evenStrengthSavePercentage: 92.0
    }
  }
]

db.PlayerStats.remove({})
  .then(() => db.PlayerStats.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

const playerBioSeed = [
  {
    id: 8474600,
    fullName: 'Roman Josi',
    link: '/api/v1/people/8474600',
    firstName: 'Roman',
    lastName: 'Josi',
    primaryNumber: '59',
    birthDate: '1990-06-01',
    currentAge: 29,
    birthCity: 'Bern',
    birthCountry: 'CHE',
    nationality: 'CHE',
    height: "6' 1\"",
    weight: 201,
    active: true,
    alternateCaptain: false,
    captain: true,
    rookie: false,
    shootsCatches: 'L',
    rosterStatus: 'Y',
    currentTeam: {
      id: 18,
      name: 'Nashville Predators',
      link: '/api/v1/teams/18'
    },
    primaryPosition: {
      code: 'D',
      name: 'Defenseman',
      type: 'Defenseman',
      abbreviation: 'D'
    }
  },
  {
    id: 8473419,
    fullName: 'Brad Marchand',
    link: '/api/v1/people/8473419',
    firstName: 'Brad',
    lastName: 'Marchand',
    primaryNumber: '63',
    birthDate: '1988-05-11',
    currentAge: 31,
    birthCity: 'Halifax',
    birthStateProvince: 'NS',
    birthCountry: 'CAN',
    nationality: 'CAN',
    height: "5' 9\"",
    weight: 181,
    active: true,
    alternateCaptain: false,
    captain: false,
    rookie: false,
    shootsCatches: 'L',
    rosterStatus: 'Y',
    currentTeam: {
      id: 6,
      name: 'Boston Bruins',
      link: '/api/v1/teams/6'
    },
    primaryPosition: {
      code: 'L',
      name: 'Left Wing',
      type: 'Forward',
      abbreviation: 'LW'
    }
  },
  {
    id: 8478427,
    fullName: 'Sebastian Aho',
    link: '/api/v1/people/8478427',
    firstName: 'Sebastian',
    lastName: 'Aho',
    primaryNumber: '20',
    birthDate: '1997-07-26',
    currentAge: 22,
    birthCity: 'Rauma',
    birthCountry: 'FIN',
    nationality: 'FIN',
    height: "6' 0\"",
    weight: 176,
    active: true,
    alternateCaptain: false,
    captain: false,
    rookie: false,
    shootsCatches: 'L',
    rosterStatus: 'Y',
    currentTeam: {
      id: 12,
      name: 'Carolina Hurricanes',
      link: '/api/v1/teams/12'
    },
    primaryPosition: {
      code: 'C',
      name: 'Center',
      type: 'Forward',
      abbreviation: 'C'
    }
  },
  {
    id: 8476945,
    fullName: 'Connor Hellebuyck',
    link: '/api/v1/people/8476945',
    firstName: 'Connor',
    lastName: 'Hellebuyck',
    primaryNumber: '37',
    birthDate: '1993-05-19',
    currentAge: 26,
    birthCity: 'Commerce',
    birthStateProvince: 'MI',
    birthCountry: 'USA',
    nationality: 'USA',
    height: "6' 4\"",
    weight: 207,
    active: true,
    alternateCaptain: false,
    captain: false,
    rookie: false,
    shootsCatches: 'L',
    rosterStatus: 'Y',
    currentTeam: {
      id: 52,
      name: 'Winnipeg Jets',
      link: '/api/v1/teams/52'
    },
    primaryPosition: {
      code: 'G',
      name: 'Goalie',
      type: 'Goalie',
      abbreviation: 'G'
    }
  }
]

db.PlayerBios.remove({})
  .then(() => db.PlayerBios.collection.insertMany(playerBioSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
