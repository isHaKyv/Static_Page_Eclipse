import React from "react";
import Slider from 'react-slick';
import products from '../data/productData';
import ProductCard from '../Moleculas/ProductCard';
import CustomText from '../atomos/Text';
import NavBar from '../Organismos/Navbar'; // Asegúrate de importar el NavBar
import '../Organismos/styles/ProductList.css'; 
import '../Organismos/styles/ProductCategories.css'; 
import '../Organismos/styles/styles.css';
import '../Pages/styles/PokemonList.css';

import bannerImage from '../images/Banner.png';

function PokemonProductList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tiempo en milisegundos (5 segundos)
  };

  const pokemonProducts = products.filter((product) => product.seccion === 'Pokemon');

  return (
    <div>
      <NavBar /> {/* Agrega el NavBar al principio del componente */}
      
      <div className="custom-product-list">
        <Slider {...settings}>
          <div>
            <img src={bannerImage} alt="Banner" className="product-list-banner" />
          </div>
          {/* Puedes agregar más banners según sea necesario */}
        </Slider>

        <CustomText className="product-list-title">Productos Pokemon</CustomText>

        <div className="custom-subtitle">Pokemon</div>

        <div className="custom-product-row">
          {pokemonProducts.map((product, index) => (
            <ProductCard
              key={index}
              productName={product.name}
              price={product.price}
              imageSrc={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonProductList;
