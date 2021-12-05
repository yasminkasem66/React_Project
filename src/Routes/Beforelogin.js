import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "../Component/Loader/Loader";

export const Home = React.lazy(() => import("../Pages/Home/Home"));
export const Checkout = React.lazy(() => import("../Pages/Checkout/Checkout"));
export const NextCheckOut = React.lazy(() => import("../Pages/NextCheckout/NextCheckout"));


export const Products = React.lazy(() => import("../Pages/Products/Products"));
export const SingleProduct = React.lazy(() =>
  import("../Pages/SingleProduct/SingleProduct")
);
export const ContactUs = React.lazy(() =>
  import("../Pages/ContactUs/ContactUs")
);
export const Cart = React.lazy(() => import("../Component/Cart/Cart"));
export const Login = React.lazy(() => import("../Pages/Login/Login"));
export const Registration = React.lazy(() =>
  import("../Pages/Registration/Registration")
);
export const AboutUs = React.lazy(() => import("../Pages/AboutUs/AboutUs"));
export const Myaccount = React.lazy(() => import("../Pages/Myaccount/Myaccount"));
export const NotFound = React.lazy(() => import("../Pages/Notfound/Notfound"));


// import Myaccount from "./Pages/Myaccount/Myaccount";

export const Beforelogin = () => {
  return (
    <>
      {/* it's responsible to show data before lazy loading loading */}
      <Suspense fallback={<Loader/>}>
        {/* first Match win */}
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/products" exact element={<Products />}/>
          <Route path="/Myaccount" exact element={<Myaccount />}/>
          <Route path="/singleProduct" exact element={<SingleProduct />} />
          <Route path="/singleProduct/:id" exact element={<SingleProduct />} />
          <Route path="/contact" exact element={<ContactUs />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/login" exact element={<Login />}/>  
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/aboutus" exact element={<AboutUs />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/nextcheckout" exact element={<NextCheckOut />} />

          <Route path="*" exact element={<NotFound />} />

        </Routes>
      </Suspense>
    </>
  );
};
