import React, { Component } from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Raging Turtles</h1>
      </header>
    );
  }
}

export default Header;
