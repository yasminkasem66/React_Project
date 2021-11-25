import React from "react";

export default function SearchComponent(props) {
  return (
    <>
      <h5>{props.heading}</h5>
      <input
        className="rounded-pill w-100 form-control"
        type="text"
        placeholder="Search"
      />
    </>
  );
}
