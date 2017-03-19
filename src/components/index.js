import React from 'react';
import Terminal from './Terminal';
import DisplayArea from './Display';
import Sidebar from './sidebar';
import ShowProject from './Projects/overlay';

class Container extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      displayed: {type: 'about' }
    };
  }

  render () {
    return <div>
      <img id="menu-btn" src="img/menu.png"/>
      <Sidebar />
      <ShowProject />
      <DisplayArea display = {this.state.displayed}/>
      <Terminal />
    </div>;
  }

}

export default Container;
