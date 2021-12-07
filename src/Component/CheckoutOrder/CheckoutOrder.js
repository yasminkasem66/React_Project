import React from "react";
import "./CheckOrder.scss";
import { useCart } from "react-use-cart";
import OrderSummary from "../OrderSummary/OrderSummary";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export default function CheckoutOrder() {
  const { t, i18n } = useTranslation();
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
  console.log(items);

  return (
    <div>
      <h6 style={{"font-size":"14px", "color":"#ABABAB" }}>ORDER SUMMARY</h6>
      <div className="card  px-2">
        <p  className=" card-header bg-white fw-bold ps-0"
            style={{"font-size":"14px","fontWeight":"500" }}>
          YOUR ORDER<span>({totalItems} item)</span>
        </p>
        <div>
          
        </div>
        {items.map((item, index) => {
          return (
            <div className="card mb-2">
              <OrderSummary item={item} />
            </div>
          );
        })}
        
        <div className="border-bottom border-top p-1  ">
          <p className="d-flex justify-content-between"
           style={{"font-size":"14px" }}>
            <span>Subtotal:</span>
            <span className="">{cartTotal} EGP</span>
          </p>
          <p  style={{"font-size":"14px" }}>Shipping amount</p>
        </div>
        
        <div className="fw-bolder d-flex justify-content-between p-1">
          <span>Total :</span>
          <span className=" modfybtn">{cartTotal} EGP</span>
        </div>
        
        <div  className="text-center ">
        <Link to="/cart">
          <button className="text-center btn  p-2 fw-bolder modfybtn ">
            MODIFY CART
          </button>
        </Link>
        </div>
       
      </div>
    </div>
  );
}
