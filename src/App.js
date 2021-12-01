import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Component/Cart/Cart";
import Login from "./Pages/Login/Login";
import Registration from './Pages/Registration/Registration'
import MyaccountList from "./Component/MyaccountList/MyaccountList";
import Myaccount from "./Pages/Myaccount/Myaccount";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { Beforelogin } from "./Routes/Beforelogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
      <Router>
    <div className="App bg-white">

      {/* <Beforelogin/> */}
      <Registration/>

   

    </div>
          </Router>
  );
}

export default App;
