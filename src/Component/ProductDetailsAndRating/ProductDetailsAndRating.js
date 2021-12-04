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
  // const [currentItemIndex, setCurrentItemIndex] = useState(0);
  // const [currentItemCount, setCurrentItemCount] = useState(0);
  // const [currentItem, setCurrentItem] = useState({});
  // useEffect(() => {
  //   items.map((item, index) => {
  //     if (item.id === props.product.id) {
  //       setCurrentItemCount(item.quantity);
  //       setCurrentItem(item);
  //     }
  //   });
  // }, []);

  //console.log("item item ", currentItem);

  // function grtcount() {
  //   items.map((item, index) => {
  //     if (item.id === props.product.id) {
  //       setCurrentItemCount(item.quantity);
  //     }
  //   });
  // }
  // grtcount();
  const updateCurrentItem = () => {
    items.map((item, index) => {
      if (item.id === props.product.id) {
        updateItemQuantity(item.id, item.quantity - 1);
        //setCurrentItemCount(item.quantity - 1);
      }
    });
  };
  // const additemToCart = () => {
  //   addItem(props.product);
  //   // items.map((item, index) => {
  //   //   // if (item.id === props.product.id) {
  //   //   //   //setCurrentItemCount(item.quantity + 1);
  //   //   // } else {
  //   //   //   //setCurrentItemIndex(index);
  //   //   //   //setCurrentItemCount(1);
  //   //   //   //setCurrentItem(item);
  //   //   //   //console.log("item item item ", currentItem);
  //   //   // }
  //   // });
  // };

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
        {/* 
        {token ? (
                        <Link className="dropdown-item" to="/Myaccount">
                          <i className="far fa-user" />
                          My Acount
                        </Link>
                      ) : (
                        <Link className="dropdown-item" to="/login">
                          <i className="far fa-user" />
                          My Acount
                        </Link>
                      )}
        */}
        <div>
          {items.map((item, index) => {
            if (item.id === props.product.id) {
              return (
                <>
                  <a href className="me-2">
                    {" "}
                    <button
                      onClick={() => updateCurrentItem()}
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
                  <span>
                    {item.quantity}
                    {/* <div style={{ fontSize: 15, display: "inline-block" }}> </div> */}
                    {/* {items.map((item, index) => {
                    if (item.id === props.product.id) {
                      return item.quantity;
                    }
                  })} */}
                  </span>
                  <a href className="ms-2 d-inline-block">
                    {" "}
                    <button
                      onClick={() => addItem(props.product)}
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
                </>
              );
            } else {
              return (
                <a href className="ms-2 d-inline-block">
                  {" "}
                  <button
                    onClick={() => addItem(props.product)}
                    className="btn btn-info border-0"
                  >
                    Add To Cart
                  </button>
                </a>
              );
            }
          })}
          <span style={{ fontSize: 13, fontWeight: 500 }}>
            {props?.quantity} (item(s) added) {props.product.quantity}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}
