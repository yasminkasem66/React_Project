import React from 'react'
import './ProductCard.scss'
export default function ProductCard(props) {
  console.log("props ProductCard", props.product);
  const product = props.product;
  return (
    <>
      <div className="itm col HomePage-imgElement ms-2   position-relative">
        <a className=" text-decoration-none text-dark" href="#">
          <span
            style={{ fontSize: 18, color: "#f68b1e", backgroundColor: "#feefde" }}
            className="product-card-discount badge fw-bold py-2 px-3"
          >
            -25%
          </span>
        </a>
        <a href="singleproduct.html">
          <img src={product?.image} alt="..." className="w-100" />
        </a>
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
      </div>

    </>
  )
}
