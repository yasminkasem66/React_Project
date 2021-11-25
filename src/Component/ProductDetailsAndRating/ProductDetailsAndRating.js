import React from 'react'
import "./ProductDetailsAndRating.scss"

export default function ProductDetailsAndRating(props) {
    return (
        
        <>
  <p className="fs-5 d-inline-block mb-2">{props.name}</p>
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
        {props.rating}
      </a>
    </p>
    <hr className="m-0" />
  </div>
  <div className="fs-4 fw-bold">
    {props.price}
    <span className="fs-6 fw-lighter text-decoration-line-through d-block">
      {props.discountedPrice}{" "}
      <span
        className="badge "
        style={{ backgroundColor: "#feefde", color: "#f68b1e" }}
      >
        {props.discountPer}
      </span>
    </span>
    <span className="fw-normal" style={{ fontSize: 12 }}>
      {props.shippingPrice}
    </span>
    <div>
      <a href className="me-2">
        {" "}
        <i
          className="fas fa-minus-square"
          style={{ color: "#f68b1e", fontSize: 35, fill: "#f68b1e" }}
        />
      </a>
      <span>
        <div style={{ fontSize: 15, display: "inline-block" }}>{props.quantity}</div>{" "}
      </span>
      <a href className="ms-2 d-inline-block">
        {" "}
        <i
          className="fas fa-plus-square"
          style={{ color: "#f68b1e", fontSize: 35, fill: "#f68b1e" }}
        />
      </a>
      <span style={{ fontSize: 13, fontWeight: 500 }}>{props.quantity} (item(s) added)</span>
    </div>
  </div>
  <hr />
</>

            
        
    )
}
