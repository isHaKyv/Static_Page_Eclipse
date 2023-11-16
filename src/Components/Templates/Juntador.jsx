import React from "react";
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import NavigationBar from "../Organismos/NavigationBar";
import Header from "../Organismos/Header";
import BannerImages from '../Organismos/BannerImages';
import ProductList from "../Organismos/ProductList";
import '../Organismos/styles/Styles.css';
import '../Organismos/styles/header.css';
import '../Organismos/styles/ProductCategories.css';
import '../Organismos/styles/ProductList.css';

export default function Juntador() {
  return (
    <div className="App">
      <NavigationBar logoSrc="logo.png" nav={false} />
      <Header />
      <BannerImages />
      <ProductList />
    </div>
  );
}
