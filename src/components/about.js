import React from 'react';

class About extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return <h1 className="about">
      Hi, I am <strong>Anshul</strong>, a student and <strong>Full Stack Web Developer</strong>. <br /><br />
      The terminal on the right will guide you.
    </h1>;
  }

}

export default About;
