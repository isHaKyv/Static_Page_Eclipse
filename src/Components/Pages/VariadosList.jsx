import React from "react";
import Slider from "react-slick";
import products from "../data/productData";
import ProductCard from "../Moleculas/ProductCard";
import CustomText from "../atomos/Text";
import NavBar from "../Organismos/Navbar"; // Asegúrate de importar el NavBar
import "../Organismos/styles/ProductList.css";
import "../Organismos/styles/ProductCategories.css";
import "../Organismos/styles/styles.css";
import './styles/PokemonList.css';

import bannerImage from "../images/Banner3.png";

function YugiOhProductList() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tiempo en milisegundos (5 segundos)
  };

  const yugiOhProducts = products.filter(
    (product) => product.seccion === "Variaditos"
  );

  return (
    <div>
      <NavBar /> {/* Agrega el NavBar al principio del componente */}

      <div className="custom-product-list">
        <Slider {...settings}>
          <div>
            <img
              src={bannerImage}
              alt="Banner"
              className="product-list-banner"
            />
          </div>
          {/* Puedes agregar más banners según sea necesario */}
        </Slider>

        <CustomText className="product-list-title">Productos Variados</CustomText>

        <div className="custom-subtitle">Variaditos</div>

        <div className="custom-product-row">
          {yugiOhProducts.map((product, index) => (
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

export default YugiOhProductList;
