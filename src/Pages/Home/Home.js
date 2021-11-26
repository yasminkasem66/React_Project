import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import UperHeader from "../../Component/UperHeader.js/UperHeader";
import ImageContainer from "../../Component/ImageContainer/ImageContainer";
import MiddeleHeader from "../../Component/Headers/MiddleHeader/MiddeleHeader";
import LowerHeader from "../../Component/Headers/LowerHeader/LowerHeader";
import Footer1 from "../../Component/Footer1/Footer1";
import JumiaInfo from "../../Component/Jumia-info/JumiaInfo";
import CatList from "../../Component/CatList/CatList";
import Sliderwith4imgs from "../../Component/Sliderwith4imgs/Sliderwith4imgs";
import SmallCard from "../../Component/SmallCard/SmallCard";
import SeeAll from "../../Component/SeeAll/SeeAll";
import { getAllProducts } from "../../Store/actions/productActions";
import Carsoual from "../../Component/Carsoual/Carsoual";
import ProductCard from "../../Component/ProductCard/ProductCard";


// images
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/Homepage/bank.jpg";
import slider1 from "../../assets/Homepage/slider1.jpg";
import slider2 from "../../assets/Homepage/slider3.png";
import slider3 from "../../assets/Homepage/slider3.jpg";
import slider4 from "../../assets/Homepage/Slider-Desktop-EN__copy_5.jpg";
import padge1 from '../../assets/Homepage/padge1.png'
import padge2 from '../../assets/Homepage/padge2.png'
import padge3 from '../../assets/Homepage/padge3.png'
import padge4 from '../../assets/Homepage/padge4.png'
import card1 from "../../assets/Homepage/Alsuhagy_Rice_10_10_-Floor-Desktop-EN.jpg";
import card2 from "../../assets/Homepage/EN(1).jpg";
import card3 from "../../assets/Homepage/EN(2).jpg";
import card4 from "../../assets/Homepage/Floor-Desktop-en_copy_2.jpg";
import card5 from "../../assets/Homepage/Floor-Desktop-en_copy_18.jpg";
import card6 from "../../assets/Homepage/Icon_260_x_144_-(6).png";



export default function Home() {

  const products = useSelector(state => state.products)
  const items = products.slice(0, 6)

  console.log("products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);



  return (
    <div className="bg-light">
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />

      <div className="row container mx-auto ">
        {/* left */}
        <div className="col-lg-2  card rounded ">
          <CatList />
        </div>
        {/* middle */}
        <div className="col-lg-8  rounded ">
          <Sliderwith4imgs slider1={slider1} slider2={slider2} slider3={slider3} slider4={slider4} />
        </div>
        {/* right */}
        <div className="col-lg-2 rounded ">
          <div className="mb-4 ">
            <ImageContainer img={image2} />
          </div>
          <div className="mt-4">
            <ImageContainer img={image2} />
          </div>
        </div>
      </div>

      <div className="row container mx-auto mt-3">
        <SmallCard statement="Official Stores" pic={padge1} className="col-3" />
        <SmallCard statement="Jumia Global" pic={padge2} className="col-3" />
        <SmallCard statement="Recharge&Bill" pic={padge3} className="col-3" />
        <SmallCard statement="Orange Points" pic={padge4} className="col-3" />
        {/* <ProductCard pic={pic1} /> */}
      </div>

      {/* here */}
      <div className="container card mt-3">

          <div className="row">
            <div className="col-12  pt-2 text-start">
              <p className="fw-bold fs-5 ps-2">Top selling items</p>
            </div>
          </div>

        <div className=" HomePage-img  row p-1">
          <div className="col ">
            <Carsoual products={products} />
          </div>
        </div>

      </div>
      {/* <!-- Start 10.10 TOP DEALS section --> */}

      <div className="container  card mt-4">
        <div className="row   justify-content-center">
          <div className="col-3  pt-2">
            <p className="fw-bold fs-4">
              10.10 TOP DEALS
            </p>
          </div>
        </div>
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={card1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={card1} wid="w-100" />
          </div>
        </div>
      </div>

      {/* <!--  Execlusive Today section --> */}

      <div className="container card mt-4">
        <div className="row   justify-content-center">
          <div className="col-3  pt-2">
            <p className="fw-bold fs-4">
              Execlusive Today!
            </p>
          </div>
        </div>
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={card2} wid="w-100" />
          </div>
        </div>
      </div>

      {/* <!--  first Ubder Execlusive Today section --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={card3} wid="w-100" />
          </div>
        </div>
      </div>
      {/* <!--  first Ubder Execlusive Today section --> */}
      <div className="container  card mt-4">
        <div className=" HomePage-img  row py-2 px-1">
          <div className="col HomePage-imgElementNON ">
            <ImageContainer img={card4} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON ">
            <ImageContainer img={card5} wid="w-100" />
          </div>
        </div>

      </div>


      <div className="container mt-4 card">
        <SeeAll color="#FFFFFF" background="#B60000" title="Weakend Clearnace | Limited Stock" />
        <div className="row mt-3">
          {
            items.map((item, index) => {
              return (
                <div className="col-md-2 mb-4" key={index}>
                  <ProductCard product={item} />
                  {/* {console.log("item", item)} */}
                </div>
              );
            })}
        </div>
      </div>



      <div className="container  card mt-4">
        <div className="row   justify-content-center">
          <div className="col-3  pt-2">
            <p className="fw-bold fs-5">
              Be Prepared for winter
            </p>
          </div>
        </div>
        <div className="  row">
          <div className="col">
              <a href=""> <ImageContainer img={card6} wid="w-100" /></a>
              <div class="name">Women Autumn Fashon</div>
          </div>
          {/* 2 */}
          <div className="col">
              <a href=""> <ImageContainer img={card6} wid="w-100" /></a>
              <div class="name">Women Autumn Fashon</div>
          </div>
          {/* 2 */}
          <div className="col">
              <a href=""> <ImageContainer img={card6} wid="w-100" /></a>
              <div class="name">Women Autumn Fashon</div>
          </div>
          {/* 2 */}
          <div className="col">
              <a href=""> <ImageContainer img={card6} wid="w-100" /></a>
              <div class="name">Women Autumn Fashon</div>
          </div>
          {/* 2 */}
          <div className="col">
              <a href=""> <ImageContainer img={card6} wid="w-100" /></a>
              <div class="name">Women Autumn Fashon</div>
          </div>
          {/* 2 */}
          <div className="col">
              <a href=""> <ImageContainer img={card6} wid="w-100" /></a>
              <div class="name">Women Autumn Fashon</div>
          </div>
        </div>
      </div>





      <JumiaInfo />
      <Footer1 />
    </div>
  );
}
