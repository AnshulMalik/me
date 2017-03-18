import React from 'react';
import list from './list';

class Overlay extends React.Component {
  constructor (props) {
    super (props);
    this.state = { index: 0, visible: false}; // Current project's index

    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    let overlay = document.querySelector('.overlay');

    document.addEventListener('show-project', (e) => {
      if(!this.state.visible) {
        overlay.style.transform = 'translateY(0)';
        this.setState({ index: e.detail, visible: true });
      }
      else {
        overlay.style.transform = 'translateY(-500%)';
        this.setState({ index: e.detail, visible: true });
        overlay.style.transform = 'translateY(0)';
      }
    });
  }

  hide() {
    let overlay = document.querySelector('.overlay');
    overlay.style.transform = 'translateY(-500%)';
    this.setState({ visible: false });
  }

  render () {
    let i = this.state.index;

    return <div className="overlay">
      <img className="close-img" onClick={ this.hide } src="img/close.png"></img>
      <h1><a href={list[i].url}>{ list[i].title }</a></h1>
      <h2>Role: { list[i].role } </h2>
      <a href={list[i].github}>Github</a>
      <p>{list[i].description}</p>
    </div>;
  }

}

export default Overlay;
