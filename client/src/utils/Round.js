const Round = (roundResult, player1, player2) => {
  let set = [];

  switch (roundResult) {
    case 'PLAYER_1_WIN':
      set.push({ result: "win", winner: player1 });
      break;
    case 'PLAYER_2_WIN':
      set.push({ result: "win", winner: player2 });
      break;
    case 'DRAW':
      set.push({ result: "draw", winner: "Draw" });
      break;
    case 'NONE':
      set.push({ result: "none", winner: "None" });
      break;
    default:
      set.push({ result: "none", winner: "None" });
  }

  return set;
}

export default Round;
