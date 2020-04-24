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
  savePlayer: function(playerData) {
    console.log('1')
    return axios.post("/api/players", playerData);
  }
};
