import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../styles/HistoryList.css';

const HistoryList = (props) => {
  return(
    <div>
      <Row>
        <Col md={6}>
          <h2>Historic Results</h2>
        </Col>
        <Col className="history-list-filter-area" md={6}>
          <label className="history-list-label" htmlFor="filter">Filter by player</label>
          <input id="filter" type="text" onChange={props.onFilterChange} />
        </Col>
      </Row>
      {props.games.map((game, gameIndex) => {
        return (
          <div key={gameIndex}>
            <Row>
              <Col md={6}>
                <Row>
                  <Col md={6}><h2>Game</h2></Col>
                  <Col md={6}><h2>Winner</h2></Col>
                </Row>
                <Row>
                  <Col md={6}>{gameIndex + 1}</Col>
                  <Col md={6}>{game.winner}</Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <h2>Rounds information</h2>
                </Row>
                {game.rounds.map((round, roundIndex) => {
                  return (
                    <div key={roundIndex}>
                      <Row>
                        <Row>
                          <Col md={4}><h4>{roundIndex + 1}</h4></Col>
                          <Col md={4}><h4>Result</h4></Col>
                          <Col md={4}><h4>Winner</h4></Col>
                        </Row>
                        <Row>
                          <Col md={4}></Col>
                          <Col md={4}>{round.result}</Col>
                          <Col md={4}>{round.winner}</Col>
                        </Row>
                      </Row>
                      <br />
                    </div>
                  );
                })}
              </Col>
            </Row>
            <Row>
              <div className="history-list-separator"></div>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

HistoryList.propTypes = {
  games: React.PropTypes.array
};

HistoryList.defaultProps = {
  games: []
};

export default HistoryList;
