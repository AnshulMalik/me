import React from 'react';
import list from './list';

let mini = '';

window.projectOnClick = function(i) {
  let event = new CustomEvent('show-project', { detail: i });
  document.dispatchEvent(event);
};

list.forEach((project, i) => {
  mini += `<div class="mini-proj" onClick=projectOnClick(${i})>${project.title}</div>`;
});

console.log(mini);

export default mini;
