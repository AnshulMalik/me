import React from 'react';

const RightArrow = ({ onClick, className }) => {
  return <img className={ className } onClick={ onClick } src="img/right.svg" />;
};

export default RightArrow;
