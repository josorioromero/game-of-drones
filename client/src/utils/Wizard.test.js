import Wizard from './Wizard.js';

describe('Paper wins a game', () => {
  it('Player1 with paper should win over player2 with rock', () => {
    expect(Wizard('paper', 'rock')).toBe('PLAYER_1_WIN');
  });
});

describe('Rock wins a game', () => {
  it('Player2 with rock should win over player1 with scissors', () => {
    expect(Wizard('scissors', 'rock')).toBe('PLAYER_2_WIN');
  });
});

describe('Scissors wins a game', () => {
  it('Player1 with scissors should win over player2 with paper', () => {
    expect(Wizard('scissors', 'paper')).toBe('PLAYER_1_WIN');
  });
});

describe('Drawn game', () => {
  it('The game should draw', () => {
    expect(Wizard('paper', 'paper')).toBe('DRAW');
  });
});

describe('No one wins', () => {
  it('Nobody wins the game', () => {
    expect(Wizard('coyote', 'parrot')).toBe('NONE');
  });
});
