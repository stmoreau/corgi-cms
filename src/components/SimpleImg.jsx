import React from 'react';

const SimpleImg = ({ element }) => {
  return <img style={element.styles} src={element.file} alt={element.text} />;
};

export default SimpleImg;
