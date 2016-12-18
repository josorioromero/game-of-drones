import React from 'react';
import { Row, Col, Table, Panel, Button, Accordion } from 'react-bootstrap';
import classNames from 'classnames';
import Utilities from '../utils/Misc.js';

import '../styles/HistoryList.css';

const HistoryList = (props) => {
  const winnerClassName = classNames({
    'hidden': !props.winnerFilter
  });

  const list = (
    <div>
      <Row>
        <Col md={6}>
          <Row>
            <Col md={6}><h2>Historic Results</h2></Col>
            <div className={winnerClassName}>
              <Col md={6}>
                <h3>{`${Utilities.capitalize(props.winnerFilter)} has won ${props.gamesWon} games`}</h3>
              </Col>
            </div>
          </Row>
        </Col>
        <Col className="history-list-filter-area" md={6}>
          <label className="history-list-label" htmlFor="filter">Filter by Game Winner</label>
          <input id="filter" type="text" value={props.filterValue} onChange={props.onFilterChange}/>
          <Button bsStyle="success"
            className="history-list-button"
            onClick={props.onFilterClick}>Filter</Button>
          <Button bsStyle="success"
              className="history-list-button"
              onClick={props.onClearClick}>Clear</Button>
        </Col>
      </Row>
      <span>Click on each row to see game details</span>
      <Accordion className="history-list-accordion" defaultActiveKey="0">
      {props.games.map((game, gameIndex) => {
        return (
          <Panel header={`Winner: ${Utilities.capitalize(game.winner)}`} bsStyle="success"
            eventKey={gameIndex}
            key={gameIndex}>
            <div key={gameIndex} className="history-list-padding">
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={6}><h2>Game</h2></Col>
                    <Col md={6}><h2>Winner</h2></Col>
                  </Row>
                  <Row>
                    <Col md={6}>{gameIndex + 1}</Col>
                    <Col md={6}>{Utilities.capitalize(game.winner)}</Col>
                  </Row>
                </Col>
                <Col md={6} className="history-list-rounds">
                  <Panel header="Rounds Information" bsStyle="success">
                  {game.rounds.map((round, roundIndex) => {
                    return (
                      <div key={roundIndex}>
                          <Table striped bordered condensed hover responsive fill>
                            <thead>
                              <tr>
                                <th></th>
                                <th className="history-list-centered">Result</th>
                                <th className="history-list-centered">Winner</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td width="15%" rowSpan="2">{`Round ${roundIndex + 1}`}</td>
                                <td>{Utilities.capitalize(round.result)}</td>
                                <td>{Utilities.capitalize(round.winner)}</td>
                              </tr>
                            </tbody>
                          </Table>
                        <br />
                      </div>
                    );
                  })}
                  </Panel>
                </Col>
              </Row>
            </div>
          </Panel>
        );
      })}
    </Accordion>
    </div>
  );

  return(
    <div>
      {list}
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
