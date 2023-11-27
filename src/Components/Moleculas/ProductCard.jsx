import React from 'react';
import Image from '../atomos/Image';
import Text from '../atomos/Text';
import './styles/ProductCard.css';
import { useNavigate } from 'react-router-dom';  // Cambiado a useNavigate

function ProductCard({ imageSrc, alt, productName, price }) {
  const navigate = useNavigate();  // Cambiado a useNavigate

  const product = {
    imageSrc: imageSrc,
    alt: alt,
    productName: productName,
    price: price,
  };

  const handleAdd = () => {
    localStorage.setItem(`producto`, JSON.stringify(product));

    // Utiliza el método navigate para redirigir a la vista de detalle del producto
    navigate(`/products/${productName}`);  // Cambiado a navigate
  };

  return (
    <button className="product-card" onClick={handleAdd}>
      <Image src={imageSrc} alt={alt} />
      <Text className="product-name">{productName}</Text>
      <Text className="product-price">{`Precio: $${price}`}</Text>
    </button>
  );
}

export default ProductCard;
