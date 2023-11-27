import React from 'react';
import Slider from 'react-slick';
import Text from '../atomos/Text';
import './styles/header.css';
import './styles/Styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bannerImage1 from '../images/Banner.png';
import bannerImage2 from '../images/Banner2.png';
import bannerImage3 from '../images/Banner3.png';


function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tiempo en milisegundos (4 segundos)
  };

  return (
    <div className="header-container">
      <Slider {...settings}>
        <div>
          <img src={bannerImage1} alt="Banner 1" className="header-banner" />
        </div>
        <div>
          <img src={bannerImage2} alt="Banner 2" className="header-banner" />
        </div>
        <div>
          <img src={bannerImage3} alt="Banner 3" className="header-banner" />
        </div>
        {/* Agrega más imágenes según sea necesario */}
      </Slider>
      <div className="header-content">
        <Text className="header-title">SLIFER</Text>
        <Text className="header-subtitle"><span>RED</span> STORE</Text>
      </div>
    </div>
  );
}

export default Header;
