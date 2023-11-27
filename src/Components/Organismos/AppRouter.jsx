import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./ProductList";
import ProductView from "./ProductView";
import Login from './Login'; // Cambiado desde 'Organismos/Login'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:productName" component={ProductView} />
        <Route path="/login" component={Login} />
        <Route path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
