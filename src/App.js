import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Checkout from "./Pages/Checkout/Checkout";
import Cart from "./Component/Cart/Cart";
import Login from "./Pages/Login/Login";
import Registration from './Pages/Registration/Registration'
import MyaccountList from "./Component/MyaccountList/MyaccountList";
import Myaccount from "./Pages/Myaccount/Myaccount";

function App() {
  return (
    <div className="App bg-light">
    <Myaccount/>
    {/* <Home/> */}



      
    </div>
  );
}

export default App;
