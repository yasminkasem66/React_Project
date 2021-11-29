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
import { getAllProducts } from "../../Store/actions/ProductActions/productActions";
import Carsoual from "../../Component/Carsoual/Carsoual";
import ProductCard from "../../Component/ProductCard/ProductCard";
import TextCenter from "../../Component/TextCenter/TextCenter";
import SmallImagesContainer from "../../Component/SmallImagesContainer/SmallImagesContainer";


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
import ChidCare from "../../assets/Homepage/Mother_Care-1152x252_-EN.jpg";
import JumiaFood1 from "../../assets/Homepage/Floor-Desktop-en_copy-(1).jpg";
import JumiaFood2 from "../../assets/Homepage/Floor-Desktop-en_copy_5.jpg";
import Pickforyou from "../../assets/Homepage/Pickfor you.jpg";
import personalcare from "../../assets/Homepage/personalcare.jpg";
import subscribe1 from "../../assets/Homepage/subscribe.jpg";
import subscribe2 from "../../assets/Homepage/subscribe.png";
import L1 from "../../assets/Homepage/Collection__260_x_144(1).png";
import L2 from "../../assets/Homepage/Collection__260_x_144(2).png";
import L3 from "../../assets/Homepage/Collection__260_x_144(3).png";
import L4 from "../../assets/Homepage/Collection__260_x_144(4).png";
import L5 from "../../assets/Homepage/Collection__260_x_144(5).png";
import L6 from "../../assets/Homepage/Collection__260_x_144(6).png";
import L7 from "../../assets/Homepage/Collection__260_x_144(7).png";
import L8 from "../../assets/Homepage/Collection__260_x_144.jpg";
import L9 from "../../assets/Homepage/Collection__260_x_144.png";
import L10 from "../../assets/Homepage/Icon_260_x_144_-(6).png";
import L11 from "../../assets/Homepage/Collection__260_x_144(1).png";
import L12 from "../../assets/Homepage/Icon_260_x_144_-(6).png";
import { Link } from "react-router-dom";




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

      {/* under header */}
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

      {/* padge */}
      <div className="row container mx-auto mt-3">
        <SmallCard statement="Official Stores" pic={padge1} className="col-3" />
        <SmallCard statement="Jumia Global" pic={padge2} className="col-3" />
        <SmallCard statement="Recharge&Bill" pic={padge3} className="col-3" />
        <SmallCard statement="Orange Points" pic={padge4} className="col-3" />
        {/* <ProductCard pic={pic1} /> */}
      </div>

      {/* caresoul products */}
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
        <TextCenter title=" 10.10 TOP DEALS" />
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
        <TextCenter title=" Execlusive Today!" />
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

      {/* Weakend Clearnace | Limited Stock */}
      <div className="container mt-4 card">
        <SeeAll color="#FFFFFF" background="#B60000" title="Weakend Clearnace | Limited Stock" />
        <div className="row mt-3">
          {
            items.map((item, index) => {
              return (
                <div className="col-md-2 mb-4" key={index}>
                  <Link to="/singleProduct"><ProductCard product={item} /></Link>
                  
                  {/* {console.log("item", item)} */}
                </div>
              );
            })}
        </div>
      </div>


      {/*  Be Prepared for winter */}
      <div className="container  card mt-4">
        <TextCenter title=" Be Prepared for winter " />
        <SmallImagesContainer text1="Women Autumn Fashon" text2="Women Autumn Fashon" text3="Women Autumn Fashon" text4="Women Autumn Fashon" text5="Women Autumn Fashon" text6="Women Autumn Fashon"
          img1={card6}
          img2={card6}
          img3={card6}
          img4={card6}
          img5={card6}
          img6={card6}/>

        {/* iiiiiiiiiiiiii */}
        <SmallImagesContainer text1="Women Autumn Fashon" text2="Women Autumn Fashon" text3="Women Autumn Fashon" text4="Women Autumn Fashon" text5="Women Autumn Fashon" text6="Women Autumn Fashon"
          img1={card6}
          img2={card6}
          img3={card6}
          img4={card6}
          img5={card6}
          img6={card6}/>
      </div>

      {/* <!-- <!-- Mother Care --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={ChidCare} wid="w-100" />
          </div>
        </div>
      </div>


      
      {/* <!--  Enjoy Jumai Pay & Jumia Food Offers --> */}
    <div className="container  card mt-4">
        <TextCenter title=" Enjoy Jumai Pay & Jumia Food Offers "/>
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={JumiaFood1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={JumiaFood2} wid="w-100" />
          </div>
        </div>
      </div>


      {/* Weakend Clearnace | Limited Stock */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title="Most Liked Products" />
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



      {/* <!--  Enjoy Jumai Pay & Jumia Food Offers --> */}
      <div className="container  card mt-3 px-4 pb-1">
        <TextCenter title=" Pick For You " />
        <div className="   row ">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={Pickforyou} wid="w-100" />
          </div>
        </div>
      </div>


      {/*Women's Sweatshirts | Up to 50% OFF */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title="Women's Sweatshirts | Up to 50% OFF" />
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
        <SmallImagesContainer img1={card6}
          img2={card6}
          img3={card6}
          img4={card6}
          img5={card6}
          img6={card6}/>
        </div>

      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={personalcare} wid="w-100" />
          </div>
        </div>
      </div>

      {/*Men's Sweatshirts | Up to 50% OFF */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title="Men's Sweatshirts | Up to 50% OFF" />
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


      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={personalcare} wid="w-100" />
          </div>
        </div>
      </div>

      {/*Shavers & hair Removal | Up to 30% OFF */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title="Shavers & hair Removal | Up to 30% OFF" />
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
        <SmallImagesContainer img1={card6}
          img2={card6}
          img3={card6}
          img4={card6}
          img5={card6}
          img6={card6}/>
      </div>


      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={personalcare} wid="w-100" />
          </div>
        </div>
      </div>



      {/*Soft Drinks | Up to 30% OFF */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title="Soft Drinks | Up to 30% OFF" />
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

      
      {/* <!--   Subscribe Now & Enjoy --> */}
      <div className="container  card mt-4">
        <TextCenter title="  Subscribe Now & Enjoy " />
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={subscribe1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={subscribe2} wid="w-100" />
          </div>
        </div>
      </div>



      {/* New On Jumia */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title=" New On Jumia" />
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

      
      {/* <!-- Start 10.10 TOP DEALS section --> */}
      <div className="container  card mt-4">
        <div className=" HomePage-img  row ">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={card1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={card1} wid="w-100" />
          </div>
        </div>
      </div>



      {/*  Be Prepared for winter */}
      <div className="container  card mt-4">
        <TextCenter title=" Be Prepared for winter " />
        <SmallImagesContainer text1="Women Autumn Fashon" text2="All In Black" text3="Dress Like a Boss" text4="Your Style Rules" text5="Baby Comfort" text6="Wedding Home"
          img1={L1}
          img2={L2}
          img3={L3}
          img4={L4}
          img5={L5}
          img6={L6} />

        {/* iiiiiiiiiiiiii */}
        <SmallImagesContainer text1="Busy Mums" text2="Breakfast Essentials" text3="Holiday Break" text4="Capture Your Moments" text5="Women Autumn Fashon" text6="More Collections"
          img1={L7}
          img2={L8}
          img3={L9}
          img4={L10}
          img5={L11}
          img6={L12} />
      </div>


      <JumiaInfo />
      <Footer1 />
    </div>
  );
}
