import React from "react";
//import img from "../../../assets/imgs/ads.jpeg";
import "./UperHeader.scss";
export default function UperHeader(props) {
  return (
    <div style={{ backgroundColor: props.color }} id="ads ">
      <div className="container">
        <div className="row">
          <img src={props.img} />
        </div>
      </div>
    </div>
  );
}
