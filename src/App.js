import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Component/Cart/Cart";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import MyaccountList from "./Component/MyaccountList/MyaccountList";
import Myaccount from "./Pages/Myaccount/Myaccount";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import { Beforelogin } from "./Routes/Beforelogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {PayPalButton} from "react-paypal-button-v2"
import Paypal from "./Component/Paypal/PayPal";

// test
import './i18n';
import i18next from "i18next";
import { CartProvider } from "react-use-cart";



// i18next.changeLanguage(lang);
const lang = localStorage.getItem('lang') || 'en';
document.documentElement.language = lang;

function App() {
  // const [checkout, setCheckOut] = useState(false);

  // const [checkout, setCheckOut]=useState(false)
  return (

    // <div className="App">
    //   {checkout ? (
    //     <Paypal />
    //   ) : (
    //     <button
    //       onClick={() => {
    //         setCheckOut(true);
    //       }}
    //     >
    //       Checkout
    //     </button>
    //   )}
    // </div>
   
    //   <Router>
    // <div className="App bg-white">

    //   {/* <Beforelogin/> */}
    //   <Registration/>

   

    // </div>
    //       </Router>
   

    <Router>
      <CartProvider>

        <div className="App bg-white"
          dir={lang === "ar" ? "rtl" : "ltr"}
        >

          <Beforelogin />

   

        </div>
      </CartProvider>

    </Router>
  )}

export default App;
