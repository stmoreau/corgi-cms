import React from 'react';
import logo from '../logo.svg';
import soundFile from '../corgi-bark.mp3';

const Welcome = () => {
  function playSound() {
    let corgiBark = new Audio(soundFile);
    corgiBark.play();
  }

  return (
    <>
      <h1 align="center">Welcome to Corgi CMS</h1>
      <img
        onClick={playSound}
        style={{
          cursor: 'pointer',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '40%',
        }}
        src={logo}
        alt="logo"
      />
    </>
  );
};

export default Welcome;
