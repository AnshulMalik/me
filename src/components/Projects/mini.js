import React from 'react';
import lists from './list';

const list = lists.projectList;

window.projectOnClick = function(i) {
  let event = new CustomEvent('show-project', { detail: i });
  document.dispatchEvent(event);
};

const Mini = list.map((project, i) => {
  return <div key={'pro-' + i} className="mini-proj" onClick={ projectOnClick.bind(this, i) }>{ project.title }</div>;
});
Mini.push(<br />);

export default Mini;
