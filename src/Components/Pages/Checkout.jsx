// Checkout.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductAccordion from '../Moleculas/ProductAccordion';
import "./styles/Checkout.css";
import productsData from '../data/productData'; // Importa la lista de productos

const Checkout = () => {
  const [availableProducts, setAvailableProducts] = useState(productsData);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (product, isSelected) => {
    if (isSelected) {
      setSelectedProducts([...selectedProducts, product]);
      setAvailableProducts(availableProducts.filter(p => p !== product));
    } else {
      setSelectedProducts(selectedProducts.filter(p => p !== product));
      setAvailableProducts([...availableProducts, product]);
    }
  };

  const handleDeselectProduct = (product) => {
    setSelectedProducts(selectedProducts.filter(p => p !== product));
    setAvailableProducts([...availableProducts, product]);
  };

  return (
    <div className="checkout-container">
      <div className="column product-list">
        <h2>Productos Disponibles</h2>
        {availableProducts.map(product => (
          <ProductAccordion
            key={product.name}
            product={product}
            onProductSelect={(isSelected) => handleProductSelect(product, isSelected)}
          />
        ))}
      </div>
      <div className="column selected-products">
        <h2>Productos Seleccionados</h2>
        <div className="selected-products-dropdown">
          {selectedProducts.map(product => (
            <ProductAccordion
              key={product.name}
              product={product}
              onProductSelect={(isSelected) => handleDeselectProduct(product)}
            />
          ))}
        </div>
      </div>
      <Link to="/SHPForm">
        <button className="checkout-button">Proceder al pago</button>
      </Link>
    </div>
  );
};

export default Checkout;
