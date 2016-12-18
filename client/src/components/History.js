import React, { Component } from 'react';
import classNames from 'classnames';
import HistoryList from './HistoryList.js';
import Header from './Header.js';
import GameStore from '../stores/GameStore.js';

export default class History extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      filteredGames: [],
      gamesToRender: [],
      winnerFilter: '',
      filterValue: '',
      gamesWon: 0,
      hideLoader: false,
      hideHistory: true
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
        gamesToRender: games,
        hideLoader: true,
        hideHistory: false
      });
    })
    .catch(error => {
      alert(error);
      alert('An error has ocurred while trying to retrieve the games');
    });;
  }

  onFilterChange(e) {
    this.setState({ filterValue: e.target.value });
  }

  onClearClick(e) {
    this.setState({
      filterValue: '',
      winnerFilter: '',
      gamesWon: 0,
      gamesToRender: this.state.games
    })
  }

  onFilterClick(e) {
    let filteredGames = [];
    let gamesWon = 0;

    filteredGames = this.state.games.filter(x => {
      return x.winner.toUpperCase().includes(this.state.filterValue.toUpperCase());
    });

    if (this.state.filterValue) {
      gamesWon = filteredGames.length > 0 ? filteredGames.length : 0;
    }

    this.setState({
      winnerFilter: this.state.filterValue,
      gamesWon,
      gamesToRender: filteredGames
    })
  }

  render() {
    const loaderClassName = classNames({
      'hidden': this.state.hideLoader
    }),
    historyClassName = classNames({
      'hidden': this.state.hideHistory,
      'history-list': true
    });

    return(
      <div className="App">
        <Header></Header>
        <br />
        <div className={loaderClassName}>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <h2>Loading Info...</h2>
        </div>
        <div className={historyClassName}>
          <HistoryList games={this.state.gamesToRender}
            winnerFilter={this.state.winnerFilter}
            gamesWon={this.state.gamesWon}
            filterValue={this.state.filterValue}
            onFilterChange={e => this.onFilterChange(e)}
            onFilterClick={e => this.onFilterClick(e)}
            onClearClick={e => this.onClearClick(e)}></HistoryList>
        </div>
      </div>
    );
  }
}
