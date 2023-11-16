import React from 'react';
import Text from '../atomos/Text';
import bannerImage from '../images/banner.png';
import './styles/header.css'; 
import './styles/Styles.css'; 

function Header() {
  return (
    <div className="header-container">
      <img src={bannerImage} alt="Banner" className="header-banner" />
      <div className="header-content">
        <Text className="header-title">SLIFER</Text>
        <Text className="header-subtitle"><span>RED</span> STORE</Text>
      </div>
    </div>
  );
}

export default Header; 