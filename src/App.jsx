import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Juntador from "./Components/Templates/Juntador";
import ProductList from "./Components/Organismos/ProductList";
import ProductDetail from "./Components/Pages/ProductDetail";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route path="/products/:name" component={ProductDetail} />
          <Route exact path="/" component={Juntador} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
