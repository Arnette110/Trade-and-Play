const mongoose = require('mongoose')
const db = require('../models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tradeandplay'
)

const playerSeed = [
  {
    id: 8474600,
    season: '2018-2019',
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
      faceOffPct: 0,
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
    },
    bio: {
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
    }
  },
  {
    id: 8473419,
    season: '2018-2019',
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
    },
    bio: {
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
    }
  },
  {
    id: 8478427,
    season: '2018-2019',
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
    },
    bio: {
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
    }
  },
  {
    id: 8476945,
    season: '2018-2019',
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
      powerPlaySavePercentage: 87.2611464968153,
      shortHandedSavePercentage: 91.9354838709677,
      evenStrengthSavePercentage: 92
    },
    bio: {
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
  },
  {
    season: '2013-2014',
    stat: {
      timeOnIce: '1902:06',
      assists: 27,
      goals: 13,
      pim: 18,
      shots: 168,
      games: 72,
      hits: 32,
      powerPlayGoals: 3,
      powerPlayPoints: 13,
      powerPlayTimeOnIce: '222:52',
      evenTimeOnIce: '1495:02',
      penaltyMinutes: '18',
      faceOffPct: 0,
      shotPct: 7.7,
      gameWinningGoals: 2,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '184:12',
      blocked: 150,
      plusMinus: -2,
      points: 40,
      shifts: 2184,
      timeOnIcePerGame: '26:25',
      evenTimeOnIcePerGame: '20:45',
      shortHandedTimeOnIcePerGame: '02:33',
      powerPlayTimeOnIcePerGame: '03:05'
    },
    id: 8474600,
    bio: {
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
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '1506:59',
      assists: 45,
      goals: 25,
      pim: 30,
      shots: 194,
      games: 78,
      hits: 40,
      powerPlayGoals: 6,
      powerPlayPoints: 11,
      powerPlayTimeOnIce: '220:55',
      evenTimeOnIce: '1207:09',
      penaltyMinutes: '30',
      faceOffPct: 56.09,
      shotPct: 12.9,
      gameWinningGoals: 1,
      overTimeGoals: 1,
      shortHandedGoals: 3,
      shortHandedPoints: 4,
      shortHandedTimeOnIce: '78:55',
      blocked: 24,
      plusMinus: -7,
      points: 70,
      shifts: 1759,
      timeOnIcePerGame: '19:19',
      evenTimeOnIcePerGame: '15:28',
      shortHandedTimeOnIcePerGame: '01:00',
      powerPlayTimeOnIcePerGame: '02:49'
    },
    id: 8477934,
    bio: {
      id: 8477934,
      fullName: 'Leon Draisaitl',
      link: '/api/v1/people/8477934',
      firstName: 'Leon',
      lastName: 'Draisaitl',
      primaryNumber: '29',
      birthDate: '1995-10-27',
      currentAge: 24,
      birthCity: 'Cologne',
      birthCountry: 'DEU',
      nationality: 'DEU',
      height: "6' 2\"",
      weight: 208,
      active: true,
      alternateCaptain: true,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 22,
        name: 'Edmonton Oilers',
        link: '/api/v1/teams/22'
      },
      primaryPosition: {
        code: 'C',
        name: 'Center',
        type: 'Forward',
        abbreviation: 'C'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '1651:50',
      assists: 38,
      goals: 49,
      pim: 32,
      shots: 355,
      games: 82,
      hits: 139,
      powerPlayGoals: 17,
      powerPlayPoints: 31,
      powerPlayTimeOnIce: '344:51',
      evenTimeOnIce: '1304:31',
      penaltyMinutes: '32',
      faceOffPct: 37.5,
      shotPct: 13.8,
      gameWinningGoals: 7,
      overTimeGoals: 3,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '02:28',
      blocked: 21,
      plusMinus: 3,
      points: 87,
      shifts: 1730,
      timeOnIcePerGame: '20:08',
      evenTimeOnIcePerGame: '15:54',
      shortHandedTimeOnIcePerGame: '00:01',
      powerPlayTimeOnIcePerGame: '04:12'
    },
    id: 8471214,
    bio: {
      id: 8471214,
      fullName: 'Alex Ovechkin',
      link: '/api/v1/people/8471214',
      firstName: 'Alex',
      lastName: 'Ovechkin',
      primaryNumber: '8',
      birthDate: '1985-09-17',
      currentAge: 34,
      birthCity: 'Moscow',
      birthCountry: 'RUS',
      nationality: 'RUS',
      height: "6' 3\"",
      weight: 236,
      active: true,
      alternateCaptain: false,
      captain: true,
      rookie: false,
      shootsCatches: 'R',
      rosterStatus: 'Y',
      currentTeam: {
        id: 15,
        name: 'Washington Capitals',
        link: '/api/v1/teams/15'
      },
      primaryPosition: {
        code: 'L',
        name: 'Left Wing',
        type: 'Forward',
        abbreviation: 'LW'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '1637:10',
      assists: 87,
      goals: 41,
      pim: 62,
      shots: 246,
      games: 82,
      hits: 44,
      powerPlayGoals: 15,
      powerPlayPoints: 48,
      powerPlayTimeOnIce: '305:41',
      evenTimeOnIce: '1327:56',
      penaltyMinutes: '62',
      faceOffPct: 0,
      shotPct: 16.7,
      gameWinningGoals: 8,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '03:33',
      blocked: 31,
      plusMinus: 24,
      points: 128,
      shifts: 1765,
      timeOnIcePerGame: '19:57',
      evenTimeOnIcePerGame: '16:11',
      shortHandedTimeOnIcePerGame: '00:02',
      powerPlayTimeOnIcePerGame: '03:43'
    },
    id: 8476453,
    bio: {
      id: 8476453,
      fullName: 'Nikita Kucherov',
      link: '/api/v1/people/8476453',
      firstName: 'Nikita',
      lastName: 'Kucherov',
      primaryNumber: '86',
      birthDate: '1993-06-17',
      currentAge: 26,
      birthCity: 'Maykop',
      birthCountry: 'RUS',
      nationality: 'RUS',
      height: "5' 11\"",
      weight: 180,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 14,
        name: 'Tampa Bay Lightning',
        link: '/api/v1/teams/14'
      },
      primaryPosition: {
        code: 'R',
        name: 'Right Wing',
        type: 'Forward',
        abbreviation: 'RW'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '2007:27',
      assists: 39,
      goals: 15,
      pim: 22,
      shots: 216,
      games: 78,
      hits: 48,
      powerPlayGoals: 3,
      powerPlayPoints: 13,
      powerPlayTimeOnIce: '237:09',
      evenTimeOnIce: '1588:28',
      penaltyMinutes: '22',
      faceOffPct: 0,
      shotPct: 6.9,
      gameWinningGoals: 5,
      overTimeGoals: 1,
      shortHandedGoals: 0,
      shortHandedPoints: 1,
      shortHandedTimeOnIce: '181:50',
      blocked: 164,
      plusMinus: 8,
      points: 54,
      shifts: 2179,
      timeOnIcePerGame: '25:44',
      evenTimeOnIcePerGame: '20:21',
      shortHandedTimeOnIcePerGame: '02:19',
      powerPlayTimeOnIcePerGame: '03:02'
    },
    id: 8474565,
    bio: {
      id: 8474565,
      fullName: 'Alex Pietrangelo',
      link: '/api/v1/people/8474565',
      firstName: 'Alex',
      lastName: 'Pietrangelo',
      primaryNumber: '27',
      birthDate: '1990-01-18',
      currentAge: 30,
      birthCity: 'King City',
      birthStateProvince: 'ON',
      birthCountry: 'CAN',
      nationality: 'CAN',
      height: "6' 3\"",
      weight: 210,
      active: true,
      alternateCaptain: false,
      captain: true,
      rookie: false,
      shootsCatches: 'R',
      rosterStatus: 'Y',
      currentTeam: {
        id: 19,
        name: 'St. Louis Blues',
        link: '/api/v1/teams/19'
      },
      primaryPosition: {
        code: 'D',
        name: 'Defenseman',
        type: 'Defenseman',
        abbreviation: 'D'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '2058:08',
      assists: 67,
      goals: 16,
      pim: 34,
      shots: 300,
      games: 82,
      hits: 90,
      powerPlayGoals: 7,
      powerPlayPoints: 28,
      powerPlayTimeOnIce: '269:05',
      evenTimeOnIce: '1624:26',
      penaltyMinutes: '34',
      faceOffPct: 0,
      shotPct: 5.3,
      gameWinningGoals: 6,
      overTimeGoals: 2,
      shortHandedGoals: 1,
      shortHandedPoints: 5,
      shortHandedTimeOnIce: '164:37',
      blocked: 105,
      plusMinus: 13,
      points: 83,
      shifts: 2200,
      timeOnIcePerGame: '25:05',
      evenTimeOnIcePerGame: '19:48',
      shortHandedTimeOnIcePerGame: '02:00',
      powerPlayTimeOnIcePerGame: '03:16'
    },
    id: 8470613,
    bio: {
      id: 8470613,
      fullName: 'Brent Burns',
      link: '/api/v1/people/8470613',
      firstName: 'Brent',
      lastName: 'Burns',
      primaryNumber: '88',
      birthDate: '1985-03-09',
      currentAge: 35,
      birthCity: 'Barrie',
      birthStateProvince: 'ON',
      birthCountry: 'CAN',
      nationality: 'CAN',
      height: "6' 5\"",
      weight: 230,
      active: true,
      alternateCaptain: true,
      captain: false,
      rookie: false,
      shootsCatches: 'R',
      rosterStatus: 'Y',
      currentTeam: {
        id: 28,
        name: 'San Jose Sharks',
        link: '/api/v1/teams/28'
      },
      primaryPosition: {
        code: 'D',
        name: 'Defenseman',
        type: 'Defenseman',
        abbreviation: 'D'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '1103:11',
      assists: 16,
      goals: 9,
      pim: 14,
      shots: 94,
      games: 63,
      hits: 44,
      powerPlayGoals: 0,
      powerPlayPoints: 8,
      powerPlayTimeOnIce: '118:13',
      evenTimeOnIce: '975:25',
      penaltyMinutes: '14',
      faceOffPct: 0,
      shotPct: 9.6,
      gameWinningGoals: 0,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '09:33',
      blocked: 64,
      plusMinus: -12,
      points: 25,
      shifts: 1441,
      timeOnIcePerGame: '17:30',
      evenTimeOnIcePerGame: '15:28',
      shortHandedTimeOnIcePerGame: '00:09',
      powerPlayTimeOnIcePerGame: '01:52'
    },
    id: 8478469,
    bio: {
      id: 8478469,
      fullName: 'Thomas Chabot',
      link: '/api/v1/people/8478469',
      firstName: 'Thomas',
      lastName: 'Chabot',
      primaryNumber: '72',
      birthDate: '1997-01-30',
      currentAge: 23,
      birthCity: 'Sainte-Marie',
      birthStateProvince: 'QC',
      birthCountry: 'CAN',
      nationality: 'CAN',
      height: "6' 2\"",
      weight: 190,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 9,
        name: 'Ottawa Senators',
        link: '/api/v1/teams/9'
      },
      primaryPosition: {
        code: 'D',
        name: 'Defenseman',
        type: 'Defenseman',
        abbreviation: 'D'
      }
    },
    __v: 0
  },
  {
    season: '2016-2017',
    stat: {
      timeOnIce: '2225:50',
      assists: 32,
      goals: 12,
      pim: 46,
      shots: 181,
      games: 82,
      hits: 129,
      powerPlayGoals: 5,
      powerPlayPoints: 19,
      powerPlayTimeOnIce: '269:39',
      evenTimeOnIce: '1745:28',
      penaltyMinutes: '46',
      faceOffPct: 100,
      shotPct: 6.6,
      gameWinningGoals: 1,
      overTimeGoals: 1,
      shortHandedGoals: 0,
      shortHandedPoints: 1,
      shortHandedTimeOnIce: '210:43',
      blocked: 109,
      plusMinus: 8,
      points: 44,
      shifts: 2657,
      timeOnIcePerGame: '27:08',
      evenTimeOnIcePerGame: '21:17',
      shortHandedTimeOnIcePerGame: '02:34',
      powerPlayTimeOnIcePerGame: '03:17'
    },
    id: 8474563,
    bio: {
      id: 8474563,
      fullName: 'Drew Doughty',
      link: '/api/v1/people/8474563',
      firstName: 'Drew',
      lastName: 'Doughty',
      primaryNumber: '8',
      birthDate: '1989-12-08',
      currentAge: 30,
      birthCity: 'London',
      birthStateProvince: 'ON',
      birthCountry: 'CAN',
      nationality: 'CAN',
      height: "6' 1\"",
      weight: 202,
      active: true,
      alternateCaptain: true,
      captain: false,
      rookie: false,
      shootsCatches: 'R',
      rosterStatus: 'Y',
      currentTeam: {
        id: 26,
        name: 'Los Angeles Kings',
        link: '/api/v1/teams/26'
      },
      primaryPosition: {
        code: 'D',
        name: 'Defenseman',
        type: 'Defenseman',
        abbreviation: 'D'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '1008:14',
      ot: 3,
      shutouts: 0,
      ties: 0,
      wins: 8,
      losses: 6,
      saves: 463,
      powerPlaySaves: 74,
      shortHandedSaves: 12,
      evenSaves: 377,
      shortHandedShots: 13,
      evenShots: 415,
      powerPlayShots: 84,
      savePercentage: 0.904,
      goalAgainstAverage: 2.915992,
      games: 21,
      gamesStarted: 16,
      shotsAgainst: 512,
      goalsAgainst: 49,
      timeOnIcePerGame: '48:00',
      powerPlaySavePercentage: 88.0952380952381,
      shortHandedSavePercentage: 92.3076923076923,
      evenStrengthSavePercentage: 90.8433734939759
    },
    id: 8479496,
    bio: {
      id: 8479496,
      fullName: 'David Rittich',
      link: '/api/v1/people/8479496',
      firstName: 'David',
      lastName: 'Rittich',
      primaryNumber: '33',
      birthDate: '1992-08-19',
      currentAge: 27,
      birthCity: 'Jihlava',
      birthCountry: 'CZE',
      nationality: 'CZE',
      height: "6' 3\"",
      weight: 206,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 20,
        name: 'Calgary Flames',
        link: '/api/v1/teams/20'
      },
      primaryPosition: {
        code: 'G',
        name: 'Goalie',
        type: 'Goalie',
        abbreviation: 'G'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '1263:52',
      ot: 0,
      shutouts: 2,
      ties: 0,
      wins: 10,
      losses: 10,
      saves: 614,
      powerPlaySaves: 75,
      shortHandedSaves: 23,
      evenSaves: 516,
      shortHandedShots: 23,
      evenShots: 562,
      powerPlayShots: 84,
      savePercentage: 0.918,
      goalAgainstAverage: 2.611035,
      games: 23,
      gamesStarted: 21,
      shotsAgainst: 669,
      goalsAgainst: 55,
      timeOnIcePerGame: '54:57',
      powerPlaySavePercentage: 89.2857142857143,
      shortHandedSavePercentage: 100,
      evenStrengthSavePercentage: 91.8149466192171
    },
    id: 8478406,
    bio: {
      id: 8478406,
      fullName: 'Mackenzie Blackwood',
      link: '/api/v1/people/8478406',
      firstName: 'Mackenzie',
      lastName: 'Blackwood',
      primaryNumber: '29',
      birthDate: '1996-12-09',
      currentAge: 23,
      birthCity: 'Thunder Bay',
      birthStateProvince: 'ON',
      birthCountry: 'CAN',
      nationality: 'CAN',
      height: "6' 4\"",
      weight: 225,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: true,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 1,
        name: 'New Jersey Devils',
        link: '/api/v1/teams/1'
      },
      primaryPosition: {
        code: 'G',
        name: 'Goalie',
        type: 'Goalie',
        abbreviation: 'G'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '1495:16',
      ot: 4,
      shutouts: 1,
      ties: 0,
      wins: 10,
      losses: 10,
      saves: 716,
      powerPlaySaves: 145,
      shortHandedSaves: 23,
      evenSaves: 548,
      shortHandedShots: 25,
      evenShots: 599,
      powerPlayShots: 163,
      savePercentage: 0.91,
      goalAgainstAverage: 2.84899,
      games: 28,
      gamesStarted: 23,
      shotsAgainst: 787,
      goalsAgainst: 71,
      timeOnIcePerGame: '53:24',
      powerPlaySavePercentage: 88.9570552147239,
      shortHandedSavePercentage: 92,
      evenStrengthSavePercentage: 91.4858096828047
    },
    id: 8471774,
    bio: {
      id: 8471774,
      fullName: 'Alex Stalock',
      link: '/api/v1/people/8471774',
      firstName: 'Alex',
      lastName: 'Stalock',
      primaryNumber: '32',
      birthDate: '1987-07-28',
      currentAge: 32,
      birthCity: 'St. Paul',
      birthStateProvince: 'MN',
      birthCountry: 'USA',
      nationality: 'USA',
      height: "6' 0\"",
      weight: 200,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 30,
        name: 'Minnesota Wild',
        link: '/api/v1/teams/30'
      },
      primaryPosition: {
        code: 'G',
        name: 'Goalie',
        type: 'Goalie',
        abbreviation: 'G'
      }
    },
    __v: 0
  },
  {
    season: '2016-2017',
    stat: {
      timeOnIce: '3240:26',
      ot: 4,
      shutouts: 2,
      wins: 31,
      losses: 20,
      saves: 1502,
      powerPlaySaves: 170,
      shortHandedSaves: 33,
      evenSaves: 1299,
      shortHandedShots: 38,
      evenShots: 1415,
      powerPlayShots: 197,
      savePercentage: 0.91,
      goalAgainstAverage: 2.740374,
      games: 57,
      gamesStarted: 55,
      shotsAgainst: 1650,
      goalsAgainst: 148,
      timeOnIcePerGame: '56:50',
      powerPlaySavePercentage: 86.2944162436548,
      shortHandedSavePercentage: 86.8421052631579,
      evenStrengthSavePercentage: 91.8021201413428
    },
    id: 8468685,
    bio: {
      id: 8468685,
      fullName: 'Henrik Lundqvist',
      link: '/api/v1/people/8468685',
      firstName: 'Henrik',
      lastName: 'Lundqvist',
      primaryNumber: '30',
      birthDate: '1982-03-02',
      currentAge: 38,
      birthCity: 'Are',
      birthCountry: 'SWE',
      nationality: 'SWE',
      height: "6' 1\"",
      weight: 182,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 3,
        name: 'New York Rangers',
        link: '/api/v1/teams/3'
      },
      primaryPosition: {
        code: 'G',
        name: 'Goalie',
        type: 'Goalie',
        abbreviation: 'G'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '1716:55',
      ot: 1,
      shutouts: 0,
      ties: 0,
      wins: 16,
      losses: 13,
      saves: 895,
      powerPlaySaves: 87,
      shortHandedSaves: 31,
      evenSaves: 777,
      shortHandedShots: 32,
      evenShots: 848,
      powerPlayShots: 96,
      savePercentage: 0.917,
      goalAgainstAverage: 2.830656,
      games: 31,
      gamesStarted: 30,
      shotsAgainst: 976,
      goalsAgainst: 81,
      timeOnIcePerGame: '55:23',
      powerPlaySavePercentage: 90.625,
      shortHandedSavePercentage: 96.875,
      evenStrengthSavePercentage: 91.627358490566
    },
    id: 8479394,
    bio: {
      id: 8479394,
      fullName: 'Carter Hart',
      link: '/api/v1/people/8479394',
      firstName: 'Carter',
      lastName: 'Hart',
      primaryNumber: '79',
      birthDate: '1998-08-13',
      currentAge: 21,
      birthCity: 'Sherwood Park',
      birthStateProvince: 'AB',
      birthCountry: 'CAN',
      nationality: 'CAN',
      height: "6' 2\"",
      weight: 181,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 4,
        name: 'Philadelphia Flyers',
        link: '/api/v1/teams/4'
      },
      primaryPosition: {
        code: 'G',
        name: 'Goalie',
        type: 'Goalie',
        abbreviation: 'G'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '3911:34',
      ot: 6,
      shutouts: 5,
      ties: 0,
      wins: 37,
      losses: 22,
      saves: 1835,
      powerPlaySaves: 207,
      shortHandedSaves: 41,
      evenSaves: 1587,
      shortHandedShots: 46,
      evenShots: 1698,
      powerPlayShots: 249,
      savePercentage: 0.921,
      goalAgainstAverage: 2.423581,
      games: 65,
      gamesStarted: 65,
      shotsAgainst: 1993,
      goalsAgainst: 158,
      timeOnIcePerGame: '60:10',
      powerPlaySavePercentage: 83.1325301204819,
      shortHandedSavePercentage: 89.1304347826087,
      evenStrengthSavePercentage: 93.4628975265018
    },
    id: 8475683,
    bio: {
      id: 8475683,
      fullName: 'Sergei Bobrovsky',
      link: '/api/v1/people/8475683',
      firstName: 'Sergei',
      lastName: 'Bobrovsky',
      primaryNumber: '72',
      birthDate: '1988-09-20',
      currentAge: 31,
      birthCity: 'Novokuznetsk',
      birthCountry: 'RUS',
      nationality: 'RUS',
      height: "6' 2\"",
      weight: 187,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 13,
        name: 'Florida Panthers',
        link: '/api/v1/teams/13'
      },
      primaryPosition: {
        code: 'G',
        name: 'Goalie',
        type: 'Goalie',
        abbreviation: 'G'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '1294:04',
      assists: 38,
      goals: 28,
      pim: 12,
      shots: 144,
      games: 71,
      hits: 42,
      powerPlayGoals: 10,
      powerPlayPoints: 22,
      powerPlayTimeOnIce: '254:24',
      evenTimeOnIce: '1034:59',
      penaltyMinutes: '12',
      faceOffPct: 40.98,
      shotPct: 19.4,
      gameWinningGoals: 7,
      overTimeGoals: 1,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '04:41',
      blocked: 51,
      plusMinus: 3,
      points: 66,
      shifts: 1598,
      timeOnIcePerGame: '18:13',
      evenTimeOnIcePerGame: '14:34',
      shortHandedTimeOnIcePerGame: '00:03',
      powerPlayTimeOnIcePerGame: '03:34'
    },
    id: 8480012,
    bio: {
      id: 8480012,
      fullName: 'Elias Pettersson',
      link: '/api/v1/people/8480012',
      firstName: 'Elias',
      lastName: 'Pettersson',
      primaryNumber: '40',
      birthDate: '1998-11-12',
      currentAge: 21,
      birthCity: 'Sundsvall',
      birthCountry: 'SWE',
      nationality: 'SWE',
      height: "6' 2\"",
      weight: 176,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 23,
        name: 'Vancouver Canucks',
        link: '/api/v1/teams/23'
      },
      primaryPosition: {
        code: 'C',
        name: 'Center',
        type: 'Forward',
        abbreviation: 'C'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '1312:45',
      assists: 33,
      goals: 25,
      pim: 34,
      shots: 195,
      games: 80,
      hits: 77,
      powerPlayGoals: 4,
      powerPlayPoints: 8,
      powerPlayTimeOnIce: '180:50',
      evenTimeOnIce: '1129:23',
      penaltyMinutes: '34',
      faceOffPct: 25.64,
      shotPct: 12.8,
      gameWinningGoals: 4,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '02:32',
      blocked: 30,
      plusMinus: 21,
      points: 58,
      shifts: 1737,
      timeOnIcePerGame: '16:24',
      evenTimeOnIcePerGame: '14:07',
      shortHandedTimeOnIcePerGame: '00:01',
      powerPlayTimeOnIcePerGame: '02:15'
    },
    id: 8475193,
    bio: {
      id: 8475193,
      fullName: 'Tomas Tatar',
      link: '/api/v1/people/8475193',
      firstName: 'Tomas',
      lastName: 'Tatar',
      primaryNumber: '90',
      birthDate: '1990-12-01',
      currentAge: 29,
      birthCity: 'Ilava',
      birthCountry: 'SVK',
      nationality: 'SVK',
      height: "5' 10\"",
      weight: 183,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 8,
        name: 'Montréal Canadiens',
        link: '/api/v1/teams/8'
      },
      primaryPosition: {
        code: 'L',
        name: 'Left Wing',
        type: 'Forward',
        abbreviation: 'LW'
      }
    },
    __v: 0
  },
  {
    season: '2018-2019',
    stat: {
      timeOnIce: '1734:45',
      assists: 35,
      goals: 9,
      pim: 34,
      shots: 177,
      games: 82,
      hits: 97,
      powerPlayGoals: 5,
      powerPlayPoints: 20,
      powerPlayTimeOnIce: '233:49',
      evenTimeOnIce: '1487:57',
      penaltyMinutes: '34',
      faceOffPct: 0,
      shotPct: 5.1,
      gameWinningGoals: 4,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '12:59',
      blocked: 66,
      plusMinus: -13,
      points: 44,
      shifts: 1905,
      timeOnIcePerGame: '21:09',
      evenTimeOnIcePerGame: '18:08',
      shortHandedTimeOnIcePerGame: '00:09',
      powerPlayTimeOnIcePerGame: '02:51'
    },
    id: 8480839,
    bio: {
      id: 8480839,
      fullName: 'Rasmus Dahlin',
      link: '/api/v1/people/8480839',
      firstName: 'Rasmus',
      lastName: 'Dahlin',
      primaryNumber: '26',
      birthDate: '2000-04-13',
      currentAge: 20,
      birthCity: 'Lidkoping',
      birthCountry: 'SWE',
      nationality: 'SWE',
      height: "6' 3\"",
      weight: 193,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 7,
        name: 'Buffalo Sabres',
        link: '/api/v1/teams/7'
      },
      primaryPosition: {
        code: 'D',
        name: 'Defenseman',
        type: 'Defenseman',
        abbreviation: 'D'
      }
    },
    __v: 0
  },
  {
    season: '2017-2018',
    stat: {
      timeOnIce: '1128:21',
      assists: 10,
      goals: 5,
      pim: 8,
      shots: 99,
      games: 55,
      hits: 62,
      powerPlayGoals: 1,
      powerPlayPoints: 3,
      powerPlayTimeOnIce: '58:52',
      evenTimeOnIce: '1032:16',
      penaltyMinutes: '8',
      faceOffPct: 0,
      shotPct: 5.1,
      gameWinningGoals: 0,
      overTimeGoals: 0,
      shortHandedGoals: 0,
      shortHandedPoints: 0,
      shortHandedTimeOnIce: '37:13',
      blocked: 97,
      plusMinus: -11,
      points: 15,
      shifts: 1412,
      timeOnIcePerGame: '20:30',
      evenTimeOnIcePerGame: '18:46',
      shortHandedTimeOnIcePerGame: '00:40',
      powerPlayTimeOnIcePerGame: '01:04'
    },
    id: 8477851,
    bio: {
      id: 8477851,
      fullName: 'Jordan Oesterle',
      link: '/api/v1/people/8477851',
      firstName: 'Jordan',
      lastName: 'Oesterle',
      primaryNumber: '82',
      birthDate: '1992-06-25',
      currentAge: 27,
      birthCity: 'Dearborn Heights',
      birthStateProvince: 'MI',
      birthCountry: 'USA',
      nationality: 'USA',
      height: "6' 0\"",
      weight: 182,
      active: true,
      alternateCaptain: false,
      captain: false,
      rookie: false,
      shootsCatches: 'L',
      rosterStatus: 'Y',
      currentTeam: {
        id: 53,
        name: 'Arizona Coyotes',
        link: '/api/v1/teams/53'
      },
      primaryPosition: {
        code: 'D',
        name: 'Defenseman',
        type: 'Defenseman',
        abbreviation: 'D'
      }
    },
    __v: 0
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
