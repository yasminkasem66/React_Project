import React from "react";
import UperHeader from "../../Component/Headers/UperHeader/UperHeader";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import Footer1 from "../../Component/Footer1/Footer1";
import JumiaInfo from "../../Component/Jumia-info/JumiaInfo";
import SlideWith2Imgs from "../../Component/SliderWith2Imgs/SlideWith2Imgs";

export default function Home() {
  return (
    <div>
      <UperHeader />
      <MiddeleHeader />
      <LowerHeader />

      <div className="row">
        <div class="col-lg-2  rounded ">

        </div>
        <div class="col-lg-8  rounded ">
          <SlideWith2Imgs/>
        </div>
        <div class="col-lg-2  rounded ">
        </div>
      </div>


      
      <JumiaInfo />
      <Footer1 />
    </div>
  );
}
