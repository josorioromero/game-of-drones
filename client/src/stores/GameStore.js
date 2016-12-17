import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/game';

export default {
    get: () => {
      return axios.get(apiUrl);
    },
    post: (state) => {
      axios.post(apiUrl, {
        winner: state.winner,
        player1: state.player1,
        player2: state.player2,
        rounds: state.rounds
      })
      .then(response => {
        alert('Game data saved successfully');
      })
      .catch(error => {
        alert('An error has ocurred while saving the game data');
      })
    }
};
