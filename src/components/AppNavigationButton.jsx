import React from 'react';

const AppNavigationButton = ({ type, text, handleClick }) => (
  <button
    onClick={() => handleClick()}
    type="button"
    className={`btn btn-outline-${type}`}
  >
    {text}
  </button>
);

export default AppNavigationButton;
