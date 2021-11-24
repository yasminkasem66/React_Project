import React from "react";
import UperHeader from "../../Component/Headers/UperHeader/UperHeader";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import Footer1 from "../../Component/Footer1/Footer1";
import JumiaInfo from "../../Component/Jumia-info/JumiaInfo";

export default function Home() {
  return (
    <div>
      <UperHeader />
      <MiddeleHeader />
      <LowerHeader />

      <JumiaInfo />
      <Footer1 />
    </div>
  );
}
