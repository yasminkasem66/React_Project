import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Component/Cart/Cart";
import Checkout from './Pages/Checkout/Checkout';
import Login from "./Pages/Login/Login";
import Registration from './Pages/Registration/Registration'

function App() {
  return (
    <div className="App bg-light">
      <Home />

      {/* <SingleProduct/> */}
      {/* <Checkout /> */}

      {/* <Products /> */}
      {/* <Cart /> */}

      {/* <SingleProduct/> */}
      {/* <Login/> */}
      {/* <Registration/> */}
    </div>
  );
}

export default App;
