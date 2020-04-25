import axios from "axios";

export default {
  getBio: function(playerId) {
    return axios.get(
      "https://statsapi.web.nhl.com/api/v1/people/" + playerId
    );
  },
  getStats: function(playerId, season) {
    return axios.get(
      "https://statsapi.web.nhl.com/api/v1/people/" + playerId + "/stats?stats=statsSingleSeason&season=" + season
    );
  },
  savePlayerStats: function(playerData) {
    return axios.post("/api/playerstats", playerData);
  },
  savePlayerBio: function(playerData) {
    return axios.post("/api/playerbio", playerData);
  }
};
