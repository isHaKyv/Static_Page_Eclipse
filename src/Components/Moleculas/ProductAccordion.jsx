// ProductAccordion.jsx
import React, { useState } from 'react';

const ProductAccordion = ({ product, onProductSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    onProductSelect(product, !isSelected);
  };

  return (
    <div className={`product-accordion ${isSelected ? 'selected' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{product.det}</p>
          {/* Aquí puedes agregar más detalles del producto si es necesario */}
        </div>
      )}
    </div>
  );
};

export default ProductAccordion;
