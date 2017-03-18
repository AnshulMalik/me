import React from 'react';
import About from '../about';

class Display extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    switch(this.props.display.type) {
      case 'about':
        return <About />;
      default:
        return <div>Nope</div>;
    }
  }

}

export default Display;
