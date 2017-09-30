import React, { Component } from 'react';
import profilePhoto from './profile.jpg';

class About extends Component {
  render() {
    return (
      <section id="about" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>I'm Blake</h2>
            </header>
            Longtime Charleston resident orginally from Beaufort, SC, I have recently made the move to Greensboro, NC as my wife, Carolyn, begins her medical residency at Cone Health Hospital.
            I work remotely while my two wonderful dogs, Kylo and Leia, keep me company.
            <br />
            <br />
            I am a passionate full stack developer, and take pride in maintaining a working knowledge of modern web technologies including the array of front end javascript frameworks, the ever-evolving node ecoystem, and serverless architecture in cloud computing.
            I am always seeking to expand my knowledge base while maintaining exceptional soft skills.
          </div>
          <span className="image">
            <img src={profilePhoto} alt="" />
          </span>
        </div>
      </section>
    )
  }
}

export default About;