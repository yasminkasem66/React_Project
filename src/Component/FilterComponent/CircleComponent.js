import React from "react";

export default function CircleComponent(props) {
  return (
    <>
      {props.imgList.map((item) => {
        return (
          <a href="#" className="Filter-img d-flex mx text-decoration-none">
            <img className="hoverimg rounded-circle" src={props.img} />
            <img src={item} />
          </a>
        );
      })}
    </>
  );
}
