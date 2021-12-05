import React from 'react'
import './CheckOrder.scss'
import { useCart } from "react-use-cart";
import OrderSummary from '../OrderSummary/OrderSummary';
import { Link } from 'react-router-dom';

export default function CheckoutOrder() {
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
      console.log(items)
      
    return (
        <div>
            <h6>ORDER SUMMARY</h6>
            <div className="card ps-2">
                <p   className=" card-header bg-white fw-bold">YOUR ORDER<span>({totalItems} item)</span></p>
                {items.map((item, index) => {
            return (
              <div className="card mb-3">
                <OrderSummary item={item} />
              </div>
            );
          })}
                <hr/>
                <div className="ps-1">
                <p>Subtotal: {cartTotal} EGP</p>
                <p>Shipping amount</p>
                </div><hr/>
                <div className="fw-bolder">Total : {cartTotal} EGP</div>
                <hr/>
                <Link to="/cart"><button  className="text-center  btn  p-2 fw-bolder modfybtn ">MODIFY CART</button></Link>
            </div>
        </div>
    )
}
