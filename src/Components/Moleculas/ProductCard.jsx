import React from 'react';
import Image from '../atomos/Image';
import Text from '../atomos/Text';
import './styles/ProductCard.css';
import { useHistory } from 'react-router-dom';

function ProductCard({ imageSrc, alt, productName, price }) {
 
  const history = useHistory();

  const product = {
    imageSrc: imageSrc,
    alt: alt,
    productName: productName,
    price: price,
  };

  const handleAdd = () => {
    localStorage.setItem(`producto`, JSON.stringify(product));

    // Utiliza el método push de history para redirigir a la vista de detalle del producto
    history.push(`/products/${productName}`);
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
