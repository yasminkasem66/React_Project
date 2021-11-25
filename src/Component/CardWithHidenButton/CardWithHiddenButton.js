import React from "react";
import "./CardWithHiddenButton.scss";

export default function CardWithHiddenButton(props) {
  console.log("props CardWithHiddenButton", props.product);
  const item = props.product;
  return (
    <>
      <div className="card cardStyle">
        <img style={{ width: "100%", height: "200px" }} src={item.image} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">EGP {item.price}</p>
          <button className="hiddenBtn btn btn-warning w-100 text-white">
            ADD TO CART
          </button>
        </div>
      </div>
    </>
  );
}
