import React from "react";
import "./ProductCard.scss";

export default function ProductCard(props) {
  return (
    <div className="row">
      <div className="itm col-3 HomePage-imgElement ms-2   position-relative">
        <a className=" text-decoration-none text-dark" href="#">
          <span
            style={{
              fontSize: 18,
              color: "#f68b1e",
              backgroundColor: "#feefde",
            }}
            className="product-card-discount badge fw-bold py-2 px-3"
          >
            -25%
          </span>
        </a>
        <a href="singleproduct.html">
          <img src={props.pic} alt="..." className="w-100" />
        </a>
        <div className="card-body">
          <div
            className="name d-inline-block text-truncate"
            style={{ maxWidth: 100 }}
          >
            Jumia Cooking Essentials box – 11 Pcs
          </div>
          <div className="fw-bold">EGP 39</div>
          <div className="text-decoration-line-through text-muted">56%</div>
        </div>
      </div>
    </div>
  );
}
