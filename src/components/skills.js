import React from 'react';
import lists from './Projects/list';

const list = lists.skillsList;

window.showPopover = function(i) {
  let event = new CustomEvent('show-skill', { detail: i });
  document.dispatchEvent(event);
};

window.hidePopover = function() {
  let event = new CustomEvent('hide-skill');
  document.dispatchEvent(event);
};

const Skills = list.map((skill, i) => {
  return <div
    key={ 'skill-' + i }
    className="mini-skill"
    onMouseEnter={ showPopover.bind(this, i) }
    onMouseLeave={ hidePopover }>
      { skill }
    </div>;
});
Skills.push(<br />);

export default Skills;
