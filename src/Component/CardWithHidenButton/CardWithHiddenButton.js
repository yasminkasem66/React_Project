import React from "react";
import "./CardWithHiddenButton.scss";
import { Link } from "react-router-dom";
export default function CardWithHiddenButton(props) {
  //console.log("props CardWithHiddenButton", props.product);
  const item = props.product;

  return (
    <>
      <div className="card cardStyle">
        <Link to={"/singleProduct/" + item.id} className="text-dark">
          <img style={{ width: "100%", height: "200px" }} src={item.image} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">EGP {item.price}</p>
          </div>
        </Link>
        <button
          style={{ width: "15rem" }}
          className="hiddenBtn btn btn-warning mx-auto mb-1 text-white"
        >
          ADD TO CART
        </button>
      </div>
    </>
  );
}
