import React from 'react';
import list from './list';

window.projectOnClick = function(i) {
  let event = new CustomEvent('show-project', { detail: i });
  document.dispatchEvent(event);
};

const Mini = list.map((project, i) => {
  return <div key={i} className="mini-proj" onClick={ projectOnClick.bind(this, i) }>{ project.title }</div>;
});
Mini.unshift(<br />);

export default Mini;
