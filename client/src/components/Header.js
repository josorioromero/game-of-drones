import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import '../styles/Header.css';
import logo from '../content/images/knight.png';

const Header = () => {
  return(
    <div className="header">
      <div className="app-header">
        <img src={logo} className="header-logo" alt="logo" />
        <h2>Game Of Drones</h2>
      </div>
      <br />
      <Nav bsStyle="tabs">
          <NavItem eventKey="1" href="/home">Game</NavItem>
          <NavItem eventKey="2" href="/history">History</NavItem>
          <NavItem eventKey="3" href="/home">Rules</NavItem>
      </Nav>
    </div>
  );
};

export default Header;
