import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrders,
  getCartItems,
} from "../../Store/actions/OrdrActions/orderActions";
import "./Cart.scss";
import image1 from "../../assets/imgs/ads.jpeg";
import CartItem from "../CartItem/CartItem";
import Footer2 from "../Footer2/Footer2";
import ImageContainer from "../ImageContainer/ImageContainer";
import MiddeleHeader from "../Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../Headers/LowerHeader/LowerHeader";

import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  console.log("items from addItem function", items);
  const orders = useSelector((state) => state.Orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  console.log("ooooorderssss", orders);
  // {
  //   orders.orderItems.map((item, index) => {
  //     return (
  //       <div className="col-md-2 mb-4" key={index}>
  //         <ProductCard product={item} />
  //         {/* {console.log("item", item)} */}
  //       </div>
  //     );
  //   })
  // }
  return (
    <>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <section className="cart bg-light">
        <div className="container mb-3">
          <h3>cart ({totalUniqueItems} item)</h3>
          {/* frist row titles */}
          <div className="row  title" style={{ color: "#8E8EAC" }}>
            <div className="col-6 ">
              <span>Item</span>
            </div>
            <div className="col-2 text-center">
              <span>QUANTITY</span>
            </div>
            <div className="col-2 text-center">
              <span>UNIT PRICE</span>
            </div>
            <div className="col-2 text-center">
              <span>SUBTOTAL</span>
            </div>
          </div>
          {/* sechond rpw cart description */}

          {items.map((item, index) => {
            return (
              <div className="card mb-3">
                <CartItem item={item} key={index} />
              </div>
            );
          })}

          {/* <div className="card mb-3">
            <CartItem />
          </div>
          <div className="card mb-3">
            <CartItem />
          </div> */}
          {/* third row total price */}
          <div className="row m-3 text-end">
            <p style={{ color: "#f68b1e", fontWeight: "bold" }}>
              Total: EGP {cartTotal}
            </p>
            <p>Shipping fees not included yet</p>
          </div>
        </div>
      </section>
      {/* shopping &  */}
      <section>
        <div className="container-fluid   bg-white">
          <div className="row  p-4">
            <div className="text-end">
              <button
                style={{
                  backgroundColor: "#fff",
                  color: "#FF9800",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
                type="button"
                className="btn  w-25 me-5  shadow rounded"
              >
                Continue Shopping
              </button>
              <Link to="/checkout" >
              <button 
                
                style={{
                  backgroundColor: "#FF9800",
                  color: "#fff",
                  fontSize: 17,
                  fontWeight: "bold",
                }}
                type="button"
                className="btn  w-25 shadow rounded"
              >
                Continue to Checkout
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
