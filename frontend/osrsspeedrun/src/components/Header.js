import React from 'react';
import './css/Header.css';
import Searchbar from './Searchbar';

import siteLogo from '../resources/images/zz.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={siteLogo} alt="Site Logo" className="site-logo" />
        <span className="site-name">SpeedrunsOSRS</span>
      </div>
      <Searchbar />
    </div>
  );
};

export default Header;
