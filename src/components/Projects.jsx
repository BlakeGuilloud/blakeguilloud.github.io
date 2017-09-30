import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
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
              <a className="item__header-url" href="https://www.npmjs.com/package/rhaegar">https://www.npmjs.com/package/rhaegar</a>
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
    )
  }
}

export default Projects;