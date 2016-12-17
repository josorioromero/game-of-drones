import Round from './Round.js';

describe('Player 1 wins the round', () => {
  const expected = [{ result: "win", winner: "john" }];

  it('Player 1 has won', () => {
    expect(Round('PLAYER_1_WIN', 'john', 'carl')).toEqual(expected);
  });
});

describe('Player 2 wins the round', () => {
  const expected = [{ result: "win", winner: "carl" }];

  it('Player 2 has won', () => {
    expect(Round('PLAYER_2_WIN', 'john', 'carl')).toEqual(expected);
  });
});

describe('The round is tied', () => {
  const expected = [{ result: "draw", winner: "Draw" }];

  it('The result is a draw', () => {
    expect(Round('DRAW', 'john', 'carl')).toEqual(expected);
  });
});

describe('No one wins the round', () => {
  const expected = [{ result: "none", winner: "None" }];

  it('The result of the round is none', () => {
    expect(Round('NONE', 'john', 'carl')).toEqual(expected);
  });
});
