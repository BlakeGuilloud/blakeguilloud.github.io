import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <section>
          <h2>Thanks for stopping by.</h2>
          <p>Feel free to contact me for contract work.</p>
        </section>
        <section>
          <dl className="alt">
            <dt>phone</dt>
            <dd><a href="tel:8438126962">843.812.6962</a></dd>
            <dt>email</dt>
            <dd><a href="mailto:fbguillo@gmail.com">blake.guilloud@gmail.com</a></dd>
            <dt>github</dt>
            <dd><a href="http://www.github.com/BlakeGuilloud">BlakeGuilloud</a></dd>
            <dt>npm</dt>
            <dd><a href="http://www.npmjs.com/~fbguillo">fbguillo</a></dd>
          </dl>
        </section>
      </footer>
    )
  }
}

export default Footer;