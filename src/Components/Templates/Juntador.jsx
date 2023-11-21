import React from "react";
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde react-router-dom
import Header from "../Organismos/Header";
import BannerImages from '../Organismos/BannerImages';
import ProductList from "../Organismos/ProductList";
import '../Organismos/styles/Styles.css';
import '../Organismos/styles/header.css';
import '../Organismos/styles/ProductCategories.css';
import '../Organismos/styles/ProductList.css';
import Navbar from "../Organismos/Navbar";


export default function Juntador() {
  return (
    <div className="App">
       <React.Fragment>
       <Navbar />
       </React.Fragment>
      <Header />
      <BannerImages />
      <ProductList />
    </div>
  );
}
