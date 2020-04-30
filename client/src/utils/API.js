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
  savePlayerBio: function(playerData) {
    return axios.post("/api/playerbio", playerData);
  },
  findPlayerStats: function(obj) {
    return axios.put("/api/playerstats", obj);
  },
  findPlayerBio: function(obj) {
    return axios.put("/api/playerbio", obj);
  },
  findAll: function () {
    return axios.get("/api/playerstats/all")
  },
  findAllbyCode: function (code) {
    return axios.get("/api/playerbio/" + code)
  },
  getUserCard: function () {
    return axios.get("/api/playerstats/collection")
  },
  getCardData: function (arr) {
    return axios.post("/api/playerstats/collection", arr)
  }
};
