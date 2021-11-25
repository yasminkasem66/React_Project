import React, { useEffect, useState } from "react";
// styles
import "./Products.scss";
// components
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import SlideWith2Imgs from "../../Component/SliderWith2Imgs/SlideWith2Imgs";
import Footer1 from "../../Component/Footer1/Footer1";
import CircleComponent from "../../Component/FilterComponent/CircleComponent";
import SearchComponent from "../../Component/FilterComponent/SearchComponent";
import SquareComponent from "../../Component/FilterComponent/SquareComponent";
import ProductHeader from "../../Component/ProductHeader/ProductHeader";
// images
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/imgs/6253007438669408234.jfif";
import image3 from "../../assets/imgs/Single_floor_1152x252_px_copy.jpg";
import image4 from "../../assets/imgs/watch.jpg";
import r1 from "../../assets/imgs/r1.PNG";
import r2 from "../../assets/imgs/r2.PNG";
import r3 from "../../assets/imgs/r3.PNG";
import r4 from "../../assets/imgs/r4.PNG";
import circle from "../../assets/imgs/circle.PNG";
import square from "../../assets/imgs/sq.PNG";
import jumiaexpress from "../../assets/imgs/jumia-ex.PNG";
import i10 from "../../assets/imgs/p10.PNG";
import i20 from "../../assets/imgs/p20.PNG";
import i30 from "../../assets/imgs/p30.PNG";
import i40 from "../../assets/imgs/p40.PNG";
import i50 from "../../assets/imgs/p50.PNG";
import i60 from "../../assets/imgs/p60.PNG";
import i80 from "../../assets/imgs/p80.PNG";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsPaganation,
} from "../../Store/actions/productActions";
import Paganation from "../../Component/PaganationComponent/Paganation";
import ProductCard from "../../Component/ProductCard/ProductCard";
import CardWithHiddenButton from "../../Component/CardWithHidenButton/CardWithHiddenButton";

export default function Products() {
  const products = useSelector((state) => state.products);
  const [pageNum, setpageNum] = useState(1);
  console.log("products", products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsPaganation(pageNum));
  }, [pageNum]);

  const pagFun2 = (e) => {
    console.log("event value", e.target.innerText);
    setpageNum(e.target.innerText);
    console.log(pageNum);
    console.log("test");
  };
  return (
    <div>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <div className="container ProductPage-img">
        <ImageContainer img={image2} />
      </div>
      <SlideWith2Imgs />

      <div className="container mt-4 card">
        <div className="row bg-white p-3">
          <div className="col-md-4 ProductPage-img">
            <ImageContainer img={image4} wid="w-100" />
          </div>
          <div className="col-md-4 ProductPage-img">
            <ImageContainer img={image4} wid="w-100" />
          </div>
          <div className="col-md-4 ProductPage-img">
            <ImageContainer img={image4} wid="w-100" />
          </div>
        </div>
      </div>
      <div className="container d-block mx-auto p-3 mt-3 bg-white card mb-3 ProductPage-img">
        <ImageContainer img={image3} wid="w-100" color={"#fff"} />
      </div>
      <div className="container mb-5">
        <div className="row text-start">
          <div className="col-md-3">
            <div className="row">
              <div className="col-11 p-3 card">
                <h3 className="mb-3">CATEGORY</h3>
                <div className="product-allproduct-productType border-bottom">
                  <h4 className="product-allProduct-productType-header">
                    Phone &amp; Tablets
                  </h4>
                  <a href="#" className=" text-decoration-none text-dark ">
                    <p className="product-allProduct-productType-item ">
                      Cell phones accessories
                    </p>
                  </a>
                  <a href="#" className="text-decoration-none text-dark ">
                    <p className="product-allProduct-productType-item ">
                      mobile phones
                    </p>
                  </a>
                  <a href="#" className="text-decoration-none text-dark ">
                    <p className="product-allProduct-productType-item ">
                      phones &amp; Fax
                    </p>
                  </a>
                  <a href="#" className="text-decoration-none text-dark ">
                    <p className="product-allProduct-productType-item ">
                      Tablet accessories
                    </p>
                  </a>
                  <a href="#" className="text-decoration-none text-dark ">
                    <p className="product-allProduct-productType-item ">
                      tablets
                    </p>
                  </a>
                  <a href="#" className="text-decoration-none text-dark ">
                    <p className="product-allProduct-productType-item ">
                      Telephones &amp; accessoriess
                    </p>
                  </a>
                </div>
                <h4 className="mb-3">PRODUCT RATING</h4>
                <CircleComponent imgList={[r1, r2, r3, r4]} img={circle} />
                <hr />
                <h4 className="mb-3">EPRESS SHIPPING</h4>
                <CircleComponent img={square} imgList={[jumiaexpress]} />
                <hr />
                <SearchComponent heading="MEGAPIXCELS" />
                <SquareComponent
                  textList={[0.0, 0.3, 1.3, 2, 2.0]}
                  img={square}
                />
                <hr />
                <h5>OPTICAL ZOOM</h5>
                <SquareComponent textList={[0.0]} img={square} />
                <hr />
                <SearchComponent heading="SCREEN SIZE" />
                <SquareComponent
                  textList={[1.7, 2.4, 4.7, 5, 2.0]}
                  img={square}
                />
                <hr />
                <SearchComponent heading="SHIPPED FROM" />
                <SquareComponent
                  textList={["Shipped from Egypt", "Shipped From Abroad"]}
                  img={square}
                />
                <hr />
                <h4>SELER FROM</h4>
                <CircleComponent imgList={[i80, i60, i40, i20]} img={circle} />
                <hr />
                <h5>DISCOUNT PERCENTAGE</h5>
                <CircleComponent
                  imgList={[i50, i40, i30, i20, i10]}
                  img={circle}
                />
                <hr />
                <h4>INTERNAL MEMORY</h4>
                <SquareComponent textList={[0, 1, 2, 3, 4]} img={square} />
                <hr />
                <h4>INTERNAL MEMORY</h4>
                <SquareComponent
                  textList={[-3.5, 0, "FREE SIZE", "ONE-SIZE", "One Size"]}
                  img={square}
                />
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          <div className="col-md-9 card">
            <ProductHeader />
            <hr />
            {/* displaying number of products  */}
            <div className="d-flex justify-content-between">
              <p className="text-muted">{products.length} Products Found</p>
              <p className="d-flex">
                <span>
                  <i className="far fa-window-frame" />
                </span>
                <span>
                  <i className="far fa-window-frame-open" />
                </span>
              </p>
            </div>
            <hr />

            <div className="row my-1">
              {products.map((product, index) => {
                return (
                  <div key={index} className="col-md-4 mb-2">
                    <CardWithHiddenButton product={product} />
                  </div>
                );
              })}
            </div>
            <Paganation pagFun2={pagFun2} />
          </div>
        </div>
      </div>

      {/* <ProductsCard pic={image2} /> */}
      {/* <CardHeader /> */}
      <Footer1 />
    </div>
  );
}
