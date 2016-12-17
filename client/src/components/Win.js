import React from 'react';
import { Button } from 'react-bootstrap';

import '../styles/Win.css';

const Win = (props) => {
  return(
    <div>
      <h1>We have a WINNER!!</h1>
      <br /><br />
      <h2>{`${props.winner} is the new EMPEROR!`}</h2>
      <Button
        bsStyle="success"
        className="win-button"
        onClick={props.onPlayAgainClick}>Play Again</Button>
    </div>
  );
};

Win.propTypes = {
  winner: React.PropTypes.string,
  onPlayAgainClick: React.PropTypes.func
};

Win.defaultProps = {
  winner: '',
  onPlayAgainClick: () => {}
};

export default Win;
