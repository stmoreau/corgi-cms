import React, { useState } from 'react';
import logo from '../logo.svg';
import soundFile from '../corgi-bark.mp3';

const Welcome = () => {
  const [hasVibrateClass, setHasVibrateClass] = useState(false);

  function playSound(event) {
    event.target.classList.add('vibrate');
    setHasVibrateClass(true);
    let corgiBark = new Audio(soundFile);
    corgiBark.play();
    corgiBark.onended = function() {
      setHasVibrateClass(false);
    };
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
        className={hasVibrateClass ? 'vibrate' : ''}
        src={logo}
        alt="logo"
      />
    </>
  );
};

export default Welcome;
