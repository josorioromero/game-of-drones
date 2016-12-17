import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import '../styles/MovementOptions.css';

const MovementOptions = (props) => {
    return(
      <div>
        <h2 className="movement-options-h2">{props.playerName}</h2>
        <label className="movement-options-label" htmlFor="dropdown-basic-1">Select your move</label>
        <DropdownButton bsStyle="default"
          title={props.selected || 'Movements'}
          id={`dropdown-basic-1`}
          onSelect={props.onSelectHandler}>
            <MenuItem eventKey="rock">Rock</MenuItem>
            <MenuItem eventKey="paper">Paper</MenuItem>
            <MenuItem eventKey="scissors">Scissors</MenuItem>
        </DropdownButton>
      </div>
    );
};

MovementOptions.propTypes = {
  playerName: React.PropTypes.string,
  selected: React.PropTypes.string,
  onSelectHandler: React.PropTypes.func
};

MovementOptions.defaultProps = {
  playerName: '',
  selected: '',
  onSelectHandler: () => {}
};

export default MovementOptions;
