import React from 'react';
import Authorization from '../containers/authorization';

const Header = () => (
  <div>
    <img 
      src="./assets/images/instaface-logo.png"
      alt="instagace-logo"
      className="logo"
    />
    <Authorization />
  </div>
);

export default Header;