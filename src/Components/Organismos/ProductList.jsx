import React from "react";
import products from '../data/productData';
import ProductCard from '../Moleculas/ProductCard';
import CustomText from '../atomos/Text';
import './styles/ProductList.css'; 
import './styles/ProductCategories.css'; 
import './styles/Styles.css'; 

function ProductList() {
  const categories = [...new Set(products.map((product) => product.category))]; // Obtener categorías únicas
  return (
    <div className="custom-product-list">
      <CustomText className="product-list-title">Nuestros Productos</CustomText>

      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <div className="custom-subtitle">{category}</div>

          <div className="custom-product-row">
            {products
              .filter((product) => product.category === category)
              .map((product, productIndex) => (
                <ProductCard
                  key={productIndex}
                  productName={product.name}
                  price={product.price}
                  imageSrc={product.image}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
