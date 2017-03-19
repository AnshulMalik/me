import React from 'react';

const CloseBtn = ({ onClose }) => {
  return <img className="close-img" onClick={ onClose } src="img/close.png" />;
};

export default CloseBtn;
