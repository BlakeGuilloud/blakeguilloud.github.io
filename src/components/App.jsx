import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './App.css';
import './Media.css';
import About from './About';
import Experience from './Experience';
import Header from './Header';
import Projects from './Projects';
import Navigation from './Navigation';
import Footer from './Footer';
import Blog from './Blog';

require('smoothscroll');

class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrapper">
          <Header />

          <Navigation />

          <div id="main">
            {/* TODO: Use children = {(match) => instead of component={About etc..}} */}
            <Route exact path="/" component={About} />
            <Route exact path="/" component={Experience} />
            <Route exact path="/" component={Projects} />

            <Route exact path="/blog" component={Blog} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
