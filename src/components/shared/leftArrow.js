import React from 'react';

const LeftArrow = ({ onClick, className }) => {
  return <img className={ className } onClick={ onClick } src="img/left.svg" />;
};

export default LeftArrow;
