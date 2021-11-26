import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../Store/actions/orderActions";
import "./Cart.scss";
export default function Cart() {
  const orders = useSelector((state) => state.orders);
  console.log("orders", orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <>
      <section className="cart">
        <div className="container">
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
          <div className="row bg-white p-3">
            <div
              className=" col-6 d-flex "
              style={{ borderRight: "1px solid #F5F5F5" }}
            >
              <div className="col-2">
                <img
                  src="./imgs/cart.jpg"
                  className="img-fluid w-100 h-auto"
                  alt
                />
              </div>
              <div className="col-9 p-2">
                <p>Seller: Bazicz</p>
                <p>Casual Zipped Hooded Sweatshirt - Black</p>
                <p>Size: L</p>
                <div style={{ color: "#FF9800" }}>
                  <span>
                    <i className="far fa-heart" /> MOVE TO SAVED ITEMS
                  </span>
                  <span className="ps-4">
                    <i className="fas fa-trash" /> REMOVE
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-2 text-center pt-3"
              style={{ borderRight: "1px solid #F5F5F5" }}
            >
              <select className="w-25">
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div
              className="col-2 pt-3 "
              style={{ borderRight: "1px solid #F5F5F5" }}
            >
              <p className="text-center ">EGP 168</p>
            </div>
            <div className="col-2 pt-3" style={{ color: "#FF9800" }}>
              <p className="text-center">EGP 168</p>
            </div>
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
