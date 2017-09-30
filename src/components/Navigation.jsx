import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll';

class Navigation extends Component {
  state = {
    hash: window.location.hash,
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.hash !== window.location.hash) {
      return true;
    }

    return false;
  }

  componentWillUpdate() {
    this.setState({ hash: window.location.hash });
  }

  componentDidUpdate() {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);

      if (element) {
        smoothscroll(element);
      }
    }
  }

  render() {
    return (
      <nav id="nav">
        <ul>
          <li><Link to={{ pathname: '/', hash: '#about' }} className={window.location.hash === '#about' ? 'active' : ''}>About Me</Link></li>
          <li><Link to={{ pathname: '/', hash: '#experience' }} className={window.location.hash === '#experience' ? 'active' : ''}>Experience</Link></li>
          <li><Link to={{ pathname: '/', hash: '#projects' }} className={window.location.hash === '#projects' ? 'active' : ''}>Recent Projects</Link></li>
          <li><Link to="blog">Blog</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;