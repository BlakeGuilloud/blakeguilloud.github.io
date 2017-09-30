import React, { Component } from 'react';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <h1>Blake Guilloud</h1>
        <img className="header__logo-image" src={logo} alt="logo" />
        <p>Software Developer</p>
      </header>
    )
  }
}

export default Header;