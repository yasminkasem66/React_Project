import React from "react";
import UperHeader from "../../Component/Headers/UperHeader/UperHeader";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import "./Home.scss";
export default function Home() {
  return (
    <div>
      <UperHeader />
      <MiddeleHeader />
      <LowerHeader />
    </div>
  );
}
