import React from "react";

export default function CircleComponent(props) {
  return (
    <>
      {props.imgList.map((item) => {
        return (
          <div className="d-flex m-1">
            <img src={props.img} />
            <img src={item} />
          </div>
        );
      })}
    </>
  );
}
