import React from 'react';
import Terminal from './Terminal';
import About from './about';
import Sidebar from './sidebar';
import ShowProject from './Projects/overlay';
import Popover from './Popover/Popover';

class Container extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return <div>
      <img id="menu-btn" src="img/menu.png"/>
      <Sidebar />
      <ShowProject />
      <div className="container">
        <About />
        <Terminal />
      </div>
    </div>;
  }

}

export default Container;
