import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Store/actions/OrdrActions/orderActions";
import "./Cart.scss";
import CartItem from "../CartItem/CartItem";
export default function Cart(props) {
  const orders = useSelector((state) => state.orders);
  console.log("orders", orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

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
      <section className="cart bg-light">
        <div className="container mb-3">
          <h3>cart (1 item)</h3>
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
          <div className="card mb-3">
            <CartItem />
          </div>
          <div className="card mb-3">
            <CartItem />
          </div>
          <div className="card mb-3">
            <CartItem />
          </div>
          {/* third row total price */}
          <div className="row m-3 text-end">
            <p style={{ color: "#f68b1e", fontWeight: "bold" }}>
              Total: EGP 168
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
