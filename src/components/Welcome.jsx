import React from 'react';
import logo from '../logo.svg';

const Welcome = () => (
  <>
    <h1 align="center">Welcome to Corgi CMS</h1>
    <img
      style={{
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

export default Welcome;
