import React, { useEffect, useState } from "react";
import "./ProductDetailsAndRating.scss";
import { useCart } from "react-use-cart";

export default function ProductDetailsAndRating(props) {
  const {
    addItem,
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const [cartItemNum, setCartItemNum] = useState(totalUniqueItems);
  const [Buttonflag, setButtonflag] = useState(false);

  const disableFunc = () => {
    setButtonflag(true);
  };
  const incCurrentItemQty = () => {
    items.map((item, index) => {
      if (item.id === props.product.id) {
        if (item.quantity >= 5 || item.quantity === props.product.quantity) {
          disableFunc();
        } else {
          updateItemQuantity(item.id, item.quantity + 1);
        }
      }
    });
  };
  const decCurrentItemQty = () => {
    items.map((item, index) => {
      if (item.id === props.product.id) {
        if (item.quantity === 1) {
          document.getElementById("add").style.visibility = "visible";
          document.getElementById("IncAndDecQty").style.visibility = "hidden";
        }
        if (item.quantity === 5 || item.quantity === props.product.quantity) {
          setButtonflag(false);
        }
        updateItemQuantity(item.id, item.quantity - 1);
      }
    });
  };
  const additemToCart = () => {
    addItem(props.product);
    document.getElementById("IncAndDecQty").style.visibility = "visible";
    document.getElementById("add").style.visibility = "hidden";
  };

  return (
    <>
      <p className="fs-5 d-inline-block mb-2">{props.product?.name}</p>
      {/* <p class="d-inline-block   " ><i class="far fa-heart  "></i></p> */}
      <div className="single-start m-0">
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star checked" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <p className="d-inline-block">
          <a href={3} style={{ textDecoration: "none" }}>
            {" "}
            {props.product?.numOfReviews}
          </a>
        </p>
        <hr className="m-0" />
      </div>
      <div className="fs-4 fw-bold">
        {props.product?.price}
        <span className="fs-6 fw-lighter text-decoration-line-through d-block">
          {props?.discountedPrice}{" "}
          <span
            className="badge "
            style={{ backgroundColor: "#feefde", color: "#f68b1e" }}
          >
            {props?.discountPer}
          </span>
        </span>
        <span className="fw-normal" style={{ fontSize: 12 }}>
          {props?.shippingPrice}
        </span>
        <div>
          <div
            style={{ visibility: "hidden" }}
            id="IncAndDecQty"
            className="IncAndDecQty"
          >
            <a href className="me-2">
              {" "}
              <button
                onClick={() => decCurrentItemQty()}
                className="btn btn-transparent border-0"
              >
                <i
                  className="fas fa-minus-square"
                  style={{
                    color: "#f68b1e",
                    fontSize: 35,
                    fill: "#f68b1e",
                  }}
                />
              </button>
            </a>
            <span id="count">
              {/* <div style={{ fontSize: 15, display: "inline-block" }}> </div> */}
              {items.map((item, index) => {
                if (item.id === props.product.id) {
                  return item?.quantity;
                }
              })}
            </span>
            <a className="ms-2 d-inline-block">
              {" "}
              <button
                onClick={() => incCurrentItemQty()}
                disabled={Buttonflag}
                className="btn btn-white border-0"
              >
                <i
                  className="fas fa-plus-square"
                  style={{
                    color: "#f68b1e",
                    fontSize: 35,
                    fill: "#f68b1e",
                  }}
                />
              </button>
            </a>
          </div>
        </div>
        <div>
          <div
            style={{ visibility: "visible" }}
            id="add"
            className="add ms-2 d-inline-block"

          >
            <button
              onClick={() => additemToCart()}
              className="btn btn-warning px-5 border-0"
              style={{
                    background: "#f68b1e",
                 
                  }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        {items.map((item, index) => {
          if (item.id === props.product.id) {
            if (item.quantity > 0) {
              setTimeout(function () {
                document.getElementById("IncAndDecQty").style.visibility =
                  "visible";
                document.getElementById("add").style.visibility = "hidden";
              }, 200);
            }
          }
        })}
        <div>
          <span style={{ fontSize: 13, fontWeight: 500 }}>
            {props?.quantity} (item(s) added) {props.product.quantity}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}
