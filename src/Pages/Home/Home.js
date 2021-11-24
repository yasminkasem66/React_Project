import React from "react";
//import UperHeader from "../../Component/UperHeader.js/UperHeader";
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import "./Home.scss";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <ImageContainer />
      </div>
      <MiddeleHeader />
      <LowerHeader />
    </>
  );
}
