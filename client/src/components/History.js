import React, { Component } from 'react';
import HistoryList from './HistoryList.js';
import Header from './Header.js';
import GameStore from '../stores/GameStore.js';

export default class History extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      filteredGames: [],
      gamesToRender: []
    }
  }

  componentDidMount() {
    let games = [];
    GameStore.get().then(response => {
      games = response.data.map(x => {
        return x;
      });
      this.setState({
        games,
        gamesToRender: games
      });
    })
    .catch(error => {
      alert(error);
      alert('An error has ocurred while trying to retrieve the games');
    });;
  }

  onFilterChange(e) {
    let filteredGames = [];
    const filter = e.target.value;
    filteredGames = this.state.games.filter(x => {
      return x.player1.includes(filter) || x.player2.includes(filter);
    });

    this.setState({
      gamesToRender: filteredGames
    })
  }

  render() {
    console.log(this.state.games);
    return(
      <div className="App">
        <Header></Header>
        <br />
        <HistoryList games={this.state.gamesToRender}
          onFilterChange={e => this.onFilterChange(e)}></HistoryList>
      </div>
    );
  }
}
