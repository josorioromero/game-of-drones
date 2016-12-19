import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';

import NameInput from './NameInput.js';
import Movement from './Movement.js';
import Results from './Results.js';
import Win from './Win.js';
import Header from './Header.js';
import GameStore from '../stores/GameStore.js';
import Wizard from '../utils/Wizard.js';
import Round from '../utils/Round.js';

import swords from '../content/images/swords.png';
import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: '',
      player1Move: '',
      player2: '',
      player2Move: '',
      rounds: [],
      roundNumber: 1,
      winner: '',
      loser: '',
      hideSplash: false,
      hideMovement: true,
      hideFightButton: true,
      hideWin: true,
      hideResults: true,
      movementComponentKey: Math.random()
    }
  }

  onStartClick(e) {
    if (this.validateNames()) {
      this.setState({ hideSplash: true, hideMovement: false });
    } else {
      alert('Please check the players names');
    }
  }

  onPlayer1Change(e) {
    this.setState({ player1: e.target.value });
  }

  onPlayer2Change(e) {
    this.setState({ player2: e.target.value });
  }

  onPlayer1Select(e) {
    this.setState({ player1Move: e });
  }

  onPlayer2Select(e) {
    this.setState({
      player2Move: e,
      hideMovement: true,
      hideFightButton: false
   });
  }

  onFightClick(e) {
    const roundResult = this.playGame();
    this.validateRound(roundResult);
  }

  onPlayAgainClick(e) {
    window.location.reload();
  }

  checkWinner() {
    let winner = '';
    let loser = '';
    if(this.state.rounds.filter(x => { return x.winner === this.state.player1 }).length === 3) {
      winner = this.state.player1;
      loser = this.state.player2;
    } else if (this.state.rounds.filter(x => { return x.winner === this.state.player2 }).length === 3){
      winner = this.state.player2;
      loser = this.state.player1;
    }

    if (winner) {
      this.setState({
        winner,
        loser,
        hideMovement: true,
        hideFightButton: true,
        hideWin: false
      }, () => {
        this.saveGame();
      });
    }
  }

  playGame() {
    return Wizard(this.state.player1Move, this.state.player2Move);
  }

  saveGame() {
    GameStore.post({
      winner: this.state.winner,
      loser: this.state.loser,
      player1: this.state.player1,
      player2: this.state.player2,
      rounds: this.state.rounds
    });
  }

  validateRound(roundResult) {
    let round = Round(roundResult, this.state.player1, this.state.player2);
    this.setState({
      player1: this.state.player1,
      player1Move: '',
      player2: this.state.player2,
      player2Move: '',
      rounds: this.state.rounds.concat(round),
      roundNumber: this.state.roundNumber + 1,
      winner: '',
      loser: '',
      hideSplash: true,
      hideMovement: false,
      hideFightButton: true,
      hideWin: true,
      hideResults: false,
      movementComponentKey: Math.random()
    }, () => {
      if(this.state.rounds.length >= 3) {
        this.checkWinner();
      }
    });
  }

  validateNames() {
    if(!this.state.player1 || !this.state.player2){
      return false;
    }

    if (this.state.player1 === this.state.player2) {
      return false;
    }

    return true;
  }

  render() {
    const splashClassName = classNames({
      'hidden': this.state.hideSplash
    }),
    movementClassName = classNames({
      'hidden': this.state.hideMovement
    }),
    fightClassName = classNames({
      'hidden': this.state.hideFightButton
    }),
    winClassName = classNames({
      'hidden': this.state.hideWin
    });

    return (
      <div className="App">
        <Header></Header>
        <Row>
          <Col md={6} className='App-game-area'>
            <div className={splashClassName}>
              <h1 className="splash-h1">Enter Players Names!</h1>
              <br />
              <NameInput labelValue="Player 1"
                playerName={this.state.player1}
                onInputChange={e => this.onPlayer1Change(e)}></NameInput>
              <NameInput labelValue="Player 2"
                playerName={this.state.player2}
                onInputChange={e => this.onPlayer2Change(e)}></NameInput>
              <Button bsStyle="success"
                className="App-button"
                onClick={e => this.onStartClick(e)}>Start</Button>
            </div>
            <div className={movementClassName}>
              <Movement
                key={this.state.movementComponentKey}
                player1={this.state.player1}
                player1Move={this.state.player1Move}
                player2Move={this.state.player2Move}
                player1SelectHandler={e => this.onPlayer1Select(e)}
                player2SelectHandler={e => this.onPlayer2Select(e)}
                player2={this.state.player2}
                roundNumber={this.state.roundNumber}></Movement>
            </div>
            <div className={fightClassName}>
              <Row>
                <img src={swords} alt="swords" />
              </Row>
              <Row>
                <Button bsStyle="success"
                  className="App-button"
                  onClick={e => this.onFightClick(e)}>Fight</Button>
              </Row>
            </div>
            <div className={winClassName}>
              <Win winner={this.state.winner}
                onPlayAgainClick={e => this.onPlayAgainClick(e)}></Win>
            </div>
          </Col>
          <Col md={6}>
            {this.state.rounds.length > 0 ? (
              <Results rounds={this.state.rounds}></Results>
            ) : (
              <h2>No rounds results yet for this game...</h2>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
