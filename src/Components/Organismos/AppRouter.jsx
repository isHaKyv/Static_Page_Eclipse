import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList"; // Ajusta la ubicación de ProductList
import ProductView from "./ProductView"; // Ajusta la ubicación de ProductView

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:productName" component={ProductView} />
        <Route path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
