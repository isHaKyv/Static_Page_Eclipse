import React from "react";
import { useParams } from "react-router-dom";
import Image from "../atomos/Image";
import Text from "../atomos/Text";
import products from "../data/productData";
import "./styles/ProductDetails.css"; // Asegúrate de importar el archivo de estilos CSS

function ProductDetail() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);

  if (!product) {
    return <Text className="error-text">Producto no encontrado</Text>;
  }

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
          <button className="btn-buy-now">Comprar</button>
          <button className="btn-add-to-cart">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
