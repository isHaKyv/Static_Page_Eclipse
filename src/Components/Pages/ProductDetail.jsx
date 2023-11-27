import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Image from "../atomos/Image";
import Text from "../atomos/Text";
import products from "../data/productData";
import "./styles/ProductDetails.css";

function ProductDetail() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);
  const navigate = useNavigate();

  if (!product) {
    return <Text className="error-text">Producto no encontrado</Text>;
  }

  const handleBuyNow = () => {
    // Muestra la alerta
    window.alert("Para comprar, primero inicia sesión.");

    // Redirige al usuario al login
    navigate("/login");
  };

  return (
    <div className="product-detail">
      <div className="product-image-container">
        <Image src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <Text className="product-name">{product.name}</Text>
        <Text className="product-price">Precio: ${product.price}</Text>
        <Text className="product-description">Description: {product.det}</Text>
        <div className="product-buttons">
          <button className="btn-buy-now" onClick={handleBuyNow}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
