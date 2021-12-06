import React, { useState } from "react";
import "./CardWithHiddenButton.scss";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import PlusAndMinus from "../PlusAndMinus/PlusAndMinus";

export default function CardWithHiddenButton(props) {
  const CartItem = props.product;
  console.log("CartItem CartItem", CartItem);
  const [flag, setFlag] = useState(true);
  const [Buttonflag, setButtonflag] = useState(false);

  const hide = () => {
    setFlag(false);
  };
  const disableFunc = () => {
    setButtonflag(true);
  };

  const incCurrentItemQty = () => {
    items.map((item, index) => {
      if (item.id === CartItem.id) {
        if (item.quantity >= 5 || item.quantity === CartItem.quantity) {
          disableFunc();
        } else {
          updateItemQuantity(item.id, item.quantity + 1);
        }
      }
    });
  };

  const decCurrentItemQty = () => {
    items.map((item, index) => {
      if (item.id === CartItem.id) {
        if (item.quantity === 1) {
          setFlag(true);
        }
        if (item.quantity === 5 || item.quantity === CartItem.quantity) {
          setButtonflag(false);
        }
        updateItemQuantity(item.id, item.quantity - 1);
      }

      //setCurrentItemCount(item.quantity - 1);
    });
  };

  const additemToCart = () => {
    hide();
    addItem(CartItem);
    // document.getElementById("IncAndDecQty").style.visibility = "visible";
    // document.getElementById("add").style.visibility = "hidden";
  };
  const { addItem, items, updateItemQuantity } = useCart();

  return (
    <>
      <div className="card cardStyle">
        <Link to={"/singleProduct/" + CartItem.id} className="text-dark">
          <img
            style={{ width: "100%", height: "200px" }}
            src={CartItem.image}
          />
          <div className="card-body">
            <h5 className="card-title text-truncate">{CartItem.name}</h5>
            <p className="card-text">EGP {CartItem.price}</p>
          </div>
        </Link>

        <div className="mx-auto">
          <div>
            {!flag && (
              <div
                style={{ width: "15rem" }}
                id="IncAndDecQty"
                className="IncAndDecQty d-flex justify-content-between"
              >
                <div href className="me-2">
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
                </div>
                <span className="mt-2" id="count">
                  {/* <div style={{ fontSize: 15, display: "inline-block" }}> </div> */}

                  {items.map((item, index) => {
                    if (item.id === props.product.id) {
                      return item?.quantity;
                    }
                  })}
                </span>
                <div className="ms-2 d-inline-block">
                  <button
                    disabled={Buttonflag}
                    onClick={() => incCurrentItemQty()}
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
                </div>
              </div>
            )}

            {flag && (
              <button
                id="add"
                onClick={() => additemToCart()}
                style={{ width: "15rem" }}
                className="add btn btn-warning mx-auto mb-1 text-white"
              >
                ADD TO CART
              </button>
            )}
            {items.map((item) => {
              if (item.id === CartItem.id) {
                if (item.quantity > 0) {
                  setTimeout(() => {
                    setFlag(false);
                  }, 100);
                }
              }
            })}
          </div>
        </div>

        {/* {items.map((item, index) => {
          if (item.id === CartItem.id) {
            if (item.quantity > 0) {
              setTimeout(function () {
                document.getElementById("IncAndDecQty").style.visibility =
                  "visible";
                document.getElementById("add").style.visibility = "hidden";
              }, 200);
            }
          }
        })} */}
      </div>
    </>
  );
}
