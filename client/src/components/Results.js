import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Results = (props) => {
  return(
    <div>
      <Row>
        <h2 className="pull-left">Score</h2>
      </Row>
      <Row>
        <Col md={4}><h3>Round</h3></Col>
        <Col md={8}><h3>Winner</h3></Col>
      </Row>
      {props.rounds.map((elem, index) => {
        return (
          <div key={index}>
            <Row>
              <Col md={4}>{index + 1}</Col>
              <Col md={8}>{elem.winner}</Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

Results.propTypes = {
  rounds: React.PropTypes.array
};

Results.defaultProps = {
  rounds: []
};

export default Results;
