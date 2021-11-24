import React from "react";
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/imgs/6253007438669408234.jfif";
import image3 from "../../assets/imgs/Single_floor_1152x252_px_copy.jpg";
import image4 from "../../assets/imgs/watch.jpg";
import SlideWith2Imgs from "../../Component/SliderWith2Imgs/SlideWith2Imgs";

import ProductsCard from "../../Component/ProductCard/ProductCard";
import CardHeader from "../../Component/CardHeader/CardHeader";
export default function Products() {
  return (
    <div>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <ImageContainer img={image2} />
      <SlideWith2Imgs />
      <div className="container mt-4 card">
        <div className="row bg-white p-3">
          <div className="col-md-4">
            <ImageContainer img={image4} wid="w-100" />
          </div>
          <div className="col-md-4">
            <ImageContainer img={image4} wid="w-100" />
          </div>
          <div className="col-md-4">
            <ImageContainer img={image4} wid="w-100" />
          </div>
        </div>
      </div>
      <div className="container d-block mx-auto p-3 mt-3 bg-white card">
        <ImageContainer img={image3} wid="w-100" color={"#fff"} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 card"></div>
          <div className="col-8 card"></div>
        </div>
      </div>

      {/* <ProductsCard pic={image2} /> */}
      {/* <CardHeader /> */}
    </div>
  );
}
