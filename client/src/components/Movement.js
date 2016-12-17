import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import MovementOptions from './MovementOptions.js';
import '../styles/Movement.css';

export default class Movement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideFirstOption: false,
      hideSecondOption: true
    }
  }

  onButtonClick(e) {
    this.setState({
      hideFirstOption: true,
      hideSecondOption: false
    })
  }

  setDefaulState() {
    this.setState({
      hideFirstOption: false,
      hideSecondOption: true
    });
  }

  render() {
    const firstOptionsClass = classNames({
      'hidden': this.state.hideFirstOption
    }),
    secondOptionsClass = classNames({
      'hidden': this.state.hideSecondOption
    });

    return(
      <div>
        <h1 className="movement-h1">{`Round ${this.props.roundNumber}`}</h1>
        <div className={firstOptionsClass}>
          <MovementOptions key="1"
            selected={this.props.player1Move}
            onSelectHandler={this.props.player1SelectHandler}
            playerName={this.props.player1}></MovementOptions>
        </div>
        <div className={secondOptionsClass}>
          <MovementOptions key="2"
            selected={this.props.player2Move}
            onSelectHandler={this.props.player2SelectHandler}
            playerName={this.props.player2}></MovementOptions>
        </div>
        <Button
          bsStyle="success"
          className="btn-movement-ok"
          onClick={e => this.onButtonClick(e)}>Ok</Button>
      </div>
    );
  }
};

Movement.propTypes = {
  player1: React.PropTypes.string,
  player1Move: React.PropTypes.string,
  player2: React.PropTypes.string,
  player2Move: React.PropTypes.string,
  player1SelectHandler: React.PropTypes.func,
  player2SelectHandler: React.PropTypes.func
};

Movement.defaultProps = {
  player1: '',
  player1Move: '',
  player2: '',
  player2Move: '',
  player1SelectHandler: () => {},
  player2SelectHandler: () => {}
};
