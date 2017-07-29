import React, { Component } from 'react';
import './App.css';
import './Media.css';
import logo from './logo.png';

require('smoothscroll');

class App extends Component {
  render() {
    return (
      <div id="wrapper">

        <header id="header" className="alt">
          {/* <span className="logo"><img src="JaxIcon.png" alt="" /></span> */}
          <h1>Blake Guilloud</h1>
          <img className="header__logo-image" src={logo} alt="logo" />
          <p>Software Developer</p>
        </header>

        <nav id="nav">
          <ul>
            <li><a href="#about" className="active">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Recent Projects</a></li>
            <li><a href="#interests">Interests</a></li>
          </ul>
        </nav>

        <div id="main">

            <section id="about" className="main">
              <div className="spotlight">
                <div className="content">
                  <header className="major">
                    <h2>I'm Blake</h2>
                  </header>
                  <p>I take pride in maintaining a working knowledge of modern web technologies. </p>
                </div>
                <span className="image">
                  <img src="http://www.fillmurray.com/200/200" alt="" />
                </span>
              </div>
            </section>

            <section id="experience" className="main">
              <header className="major">
                <h2>Experience</h2>
              </header>
              <div className="item">
                <h2>Rhinogram</h2>
                <h4>Software Developer [Feb. 2016 - Present]</h4>
                <p>
                  Responsible for pioneering full stack development efforts surrounding multiple web applications. Worked alongside product team to deliver a state of the art medical communications platform.
                </p>
              </div>
              <div className="item">
                <h2>Blue Cactus Web Solutions</h2>
                <h4>Contractor and Consultant [Nov. 2016 - Present]</h4>
                <p>
                  Independent contracting for a small web development firm. Responsible for building web applications from the ground up, while making product and design decisions based on the needs of the client.
                </p>
              </div>
            </section>

            <section id="projects" className="main">
              <header className="major">
                <h2>Recent Projects</h2>
                <p>
                  I love building things. Front ends, APIs, and especially node modules- I enjoy solving problems of all sorts.
                </p>
              </header>
              <div className="item">
                <div className="item__header">
                  <h2>Rhinostyle</h2>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>React UI Toolkit</span>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>
                    <a className="item__header-url" href="http://rhinogram.github.io/rhinostyle/">http://rhinogram.github.io/rhinostyle/</a>
                  </span>
                </div>
                <p>
                  A resource for designers, product managers, and developers, providing a common language around Rhinogram’s UI patterns.
                </p>
              </div>
              <div className="item">
                <div className="item__header">
                  <h2>RCC-CLI</h2>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>React Create Component</span>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>
                    <a className="item__header-url" href="https://www.npmjs.com/package/rcc-cli">https://www.npmjs.com/package/rcc-cli</a>
                  </span>
                </div>
                <p>
                  A command line interface for building consistent React components, containers, and pure functions.
                </p>
              </div>
              <div className="item">
                <div className="item__header">
                  <h2>Rhaegar</h2>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>Regex Library</span>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>
                    <a className="item__header-url" href="https://www.npmjs.com/package/rcc-cli">https://www.npmjs.com/package/rcc-cli</a>
                  </span>
                </div>
                <p>
                  A lightweight, zero dependency javascript library for dealing with regular expressions.
                </p>
              </div>
              <div className="item">
                <div className="item__header">
                  <h2>Succink</h2>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>Shortlink Generator</span>
                  <span className="item__header-pipe">
                    |
                  </span>
                  <span>
                    <a className="item__header-url" href="https://www.npmjs.com/package/succink">https://www.npmjs.com/package/succink</a>
                  </span>
                </div>
                <p>
                  Succink is a shortlink generator powered by AWS Lambda functions and exposed through API Gateway. The corresponding node-sdk can be found on npm.
                </p>
              </div>
            </section>

            <section id="interests" className="main special">
              <header className="major">
                <h2>Interests</h2>
                <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
              </header>
              
              <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
            </section>

        </div>

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

			</div>
    );
  }
}

export default App;
