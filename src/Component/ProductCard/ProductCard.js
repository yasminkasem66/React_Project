import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  // console.log("props ProductCard", props.product);
  const product = props.product;
  return (
    <>
      <div className="itm col HomePage-imgElement ms-2   position-relative">
        <Link to={"/singleProduct/" + product?.id} className="text-dark">
          <span
            style={{
              fontSize: 15,
              color: "#f68b1e",
              backgroundColor: "#feefde",
            }}
            className="product-card-discount badge fw-bold p-1"
          >
            -25%
          </span>

          <img src={product?.image} alt="..." className="w-100" />

          <div className="card-body">
            <div
              className="name d-inline-block text-truncate"
              style={{ maxWidth: 100 }}
            >
              {product?.name}
            </div>
            <div className="fw-bold">EGP {product?.price}</div>
            <div className="text-decoration-line-through text-muted">56%</div>
          </div>
        </Link>
      </div>
    </>
  );
}
