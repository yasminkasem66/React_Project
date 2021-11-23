import React from "react";
import img from "../../../assets/imgs/ads.jpeg";
import "./UperHeader.scss";
export default function UperHeader() {
  return (
    <div className="navImg" id="ads ">
      <div className="container">
        <div className="row">
          <img src={img} />
        </div>
      </div>
    </div>
  );
}
