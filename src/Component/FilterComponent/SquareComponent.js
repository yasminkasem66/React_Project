import React from "react";

export default function SquareComponent(props) {
  return (
    <>
      {props.textList.map((item) => {
        return (
          <div className="d-flex mt-2">
            <img src={props.img} />
            <p className="m-1">{item}</p>
          </div>
        );
      })}
    </>
  );
}
