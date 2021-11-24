import React from "react";
import UperHeader from "../../Component/Headers/UperHeader/UperHeader";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/imgs/6253007438669408234.jfif";
import image3 from "../../assets/imgs/Single_floor_1152x252_px_copy.jpg";
import SlideWith2Imgs from "../../Component/SliderWith2Imgs/SlideWith2Imgs";
import ProductsCard from "../../Component/ProductCard/ProductCard";
import CardHeader from "../../Component/CardHeader/CardHeader";
export default function Products() {
  return (
    <div>
      <UperHeader img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <UperHeader img={image2} />
      <SlideWith2Imgs />
      <UperHeader className="mt-2" img={image3} color={"#fff"} />
      {/* <ProductsCard pic={image2} /> */}
      {/* <CardHeader /> */}
    </div>
  );
}
