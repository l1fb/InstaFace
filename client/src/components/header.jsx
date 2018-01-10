import React from 'react';
import Authorization from '../containers/authorization';

const Header = () => (
  <div className="header">
    <div className="container">
      <img 
        src="./assets/images/instaface-logo.png"
        alt="instagace-logo"
        className="logo"
      />
      <Authorization />
    </div>
  </div>
);

export default Header;