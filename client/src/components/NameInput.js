import React from 'react';
import '../styles/NameInput.css';

const NameInput = (props) => {
  return(
    <div>
      <label className="name-input-label"
        htmlFor="player1-name">{props.labelValue}</label>
      <input className="splash-input"
        id="player1-name"
        type="text"
        value={props.playerName}
        onChange={props.onInputChange}></input>
      <br /><br />
    </div>
  );
};

NameInput.propTypes = {
  labelValue: React.PropTypes.string,
  playerName: React.PropTypes.string,
  onInputChange: React.PropTypes.func
};

NameInput.defaultProps = {
  labelValue: '',
  playerName: '',
  onInputChange: () => {}
};

export default NameInput;
