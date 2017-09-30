import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
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
          <h4>Contractor and Consultant [Nov. 2016 - June 2017]</h4>
          <p>
            Independent contracting for a small web development firm. Responsible for building web applications from the ground up, while making product and design decisions based on the needs of the client.
          </p>
        </div>
      </section>
    )
  }
}

export default Experience;