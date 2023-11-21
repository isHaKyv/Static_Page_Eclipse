import React from 'react';
import Image from '../atomos/Image';
import imgPokemonSlifer from '../images/pokemon-slifer.png';
import imgVariadosSlifer from '../images/variados-slifer.png';
import imgYugiohSlifer from '../images/yugioh-slifer.png';
import './styles/ProductCategories.css'; 
import './styles/Styles.css'; 

function BannerImages() {
  return (
    <div className="banner-images">
      <div className="custom-product-categories">
        <div className="product-category">
          <Image src={imgPokemonSlifer} alt="Pokemon Slifer" />
        </div>
         <div className="product-category">
          <Image src={imgYugiohSlifer} alt="Yugioh Slifer" />
        </div>
        <div className="product-category">
          <Image src={imgVariadosSlifer} alt="Variados Slifer" />
        </div>
      </div>
    </div>
  );
}

export default BannerImages;
