import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/PokemonList" className="product-category">
          <Image src={imgPokemonSlifer} alt="Pokemon Slifer" />
        </Link>
        <Link to="/YugiohList" className="product-category">
          <Image src={imgYugiohSlifer} alt="Yugioh Slifer" />
        </Link>
        <Link to="/VariList" className="product-category">
          <Image src={imgVariadosSlifer} alt="Variados Slifer" />
        </Link>
      </div>
    </div>
  );
}

export default BannerImages;
