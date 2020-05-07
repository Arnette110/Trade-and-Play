import axios from "axios";

export default {
  getBio: function(playerId) {
    return axios.get("https://statsapi.web.nhl.com/api/v1/people/" + playerId);
  },
  getStats: function(playerId, season) {
    return axios.get(
      "https://statsapi.web.nhl.com/api/v1/people/" +
        playerId +
        "/stats?stats=statsSingleSeason&season=" +
        season
    );
  },
  savePlayerStats: function(playerData) {
    return axios.post("/api/playerstats", playerData);
  },
  findPlayerStats: function(obj) {
    return axios.put("/api/playerstats", obj);
  },
  findAll: function () {
    return axios.get("/api/playerstats/all")
  },
  getUserCard: function (username) {
    return axios.get("/api/playerstats/collection/" + username)
  },
  getCardData: function (arr) {
    return axios.post("/api/playerstats/collection", arr)
  },
  findAllbyCode: function (code) {
    return axios.get("/api/playerstats/draft/" + code)
  },
  reducePick: function (draftPick) {
    return axios.post("/api/draft/", draftPick)
  },
  generateDraft: function (position) {
    console.log('1')
    return axios.get("/api/playerstats/draft/first/" + position)
  },
  safeProfile: function (obj) {
    return axios.post("/api/user", obj)
  },
  addCardToCollection: function (obj) {
    return axios.post("/api/draft/add", obj)
  }
};
