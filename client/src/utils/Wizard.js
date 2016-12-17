import Rules from './Rules.js';

const Wizard = (player1move, player2move) => {
    let result = '';

    if (player1move === player2move) {
        return 'DRAW';
    } else {
      if (Rules[player1move] !== undefined && Rules[player2move] !== undefined) {
        Rules[player1move].indexOf(player2move) !== -1
            ? result = 'PLAYER_1_WIN'
            : Rules[player2move].indexOf(player1move) !== -1
                ? result = 'PLAYER_2_WIN'
                : result = 'NONE';
      } else {
        result = 'NONE';
      }
    }

    return result;
}

export default Wizard;
