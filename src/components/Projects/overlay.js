import React from 'react';
import lists from './list';
const list = lists.projectList;

import CloseBtn from '../shared/closeBtn';
import LeftArrow from '../shared/leftArrow';
import RightArrow from '../shared/rightArrow';

class Overlay extends React.Component {
  constructor (props) {
    super (props);
    this.state = { index: 0, visible: false}; // Current project's index

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);

    this.next = () => this.setState({ index: (this.state.index + 1) % list.length});
    this.previous = () => {
      let nextIndex = this.state.index - 1;
      if(nextIndex < 0)
        nextIndex = list.length - 1;

      this.setState({ index: nextIndex });
    };
  }

  componentDidMount() {
    document.addEventListener('show-project', this.show);
  }

  show(e) {
    e = e || { detail: this.state.index };
    let overlay = document.querySelector('.overlay');
    overlay.style.transform = 'translateY(0)';
    this.refs.container.style.visibility = 'visible';
    this.setState({ index: e.detail, visible: true });
  }

  hide() {
    let overlay = document.querySelector('.overlay');
    overlay.style.transform = 'translateY(-200%)';
        this.refs.container.style.visibility = 'hidden';
    this.setState({ visible: false });
  }

  render () {
    let i = this.state.index;

    return <div className="project-container" ref="container">
      <div className="overlay">
        <CloseBtn onClose={ this.hide }/>
        <h1 className="proj-head"><a href={list[i].url} target="_blank">{ list[i].title }<br /><img className="proj-img" src={ list[i].image } /></a></h1>
        <LeftArrow className="left-arrow" onClick={ this.previous }/>
        <RightArrow className="right-arrow" onClick={ this.next } />
        <h2>Role: { list[i].role } </h2>
        <a href={list[i].github} target="_blank">Github</a>
        <p>{list[i].description}</p>
      </div>
    </div>;
  }

}

export default Overlay;
