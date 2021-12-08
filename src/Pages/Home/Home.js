import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import { ProductById } from "../../Store/actions/ProductActions/GetSingleProduct";


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
import { getAllProducts } from '../../Store/actions/ProductActions/getAllProducts';

import Carsoual from "../../Component/Carsoual/Carsoual";
import ProductCard from "../../Component/ProductCard/ProductCard";
import TextCenter from "../../Component/TextCenter/TextCenter";
import SmallImagesContainer from "../../Component/SmallImagesContainer/SmallImagesContainer";


// images
import image1 from "../../assets/imgs/ads.jpeg";
import image2 from "../../assets/Homepage/bank.jpg";
import image11 from "../../assets/Homepage/Artboard_1.jpg";
// import image2 from "../../assets/Homepage/Artboard_1_copy_2-2.jpg";
import slider1 from "../../assets/Homepage/slider1.jpg";
import slider2 from "../../assets/Homepage/slider3.png";
import slider3 from "../../assets/Homepage/slider3.jpg";
import slider4 from "../../assets/Homepage/Slider-Desktop-EN__copy_5.jpg";
import padge1 from '../../assets/Homepage/padge1.png'
import padge2 from '../../assets/Homepage/padge2.png'
import padge3 from '../../assets/Homepage/padge3.png'
import padge4 from '../../assets/Homepage/padge4.png'
import card1 from "../../assets/Homepage/Snooze_-_Floor-Desktop_-EN.jpg";
import card1x from "../../assets/Homepage/Akai-_Floor-Desktop_-EN.jpg";
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
import flash from "../../assets/Homepage/flash.gif";
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
import L12 from "../../assets/Homepage/Collection__260_x_144_copy.png";
import x1 from "../../assets/Homepage/x (1).png";
import x2 from "../../assets/Homepage/x (2).png";
import x3 from "../../assets/Homepage/x (3).png";
import x4 from "../../assets/Homepage/x (4).png";
import x5 from "../../assets/Homepage/x (5).png";
import x6 from "../../assets/Homepage/x (6).png";
import x7 from "../../assets/Homepage/x (7).png";
import x8 from "../../assets/Homepage/x (8).png";
import x9 from "../../assets/Homepage/x (9).png";
import x10 from "../../assets/Homepage/x (10).png";
import x11 from "../../assets/Homepage/x (11).png";
import x12 from "../../assets/Homepage/x (12).png";
import y1 from "../../assets/Homepage/y (1).png";
import y2 from "../../assets/Homepage/y (2).png";
import y3 from "../../assets/Homepage/y (3).png";
import y4 from "../../assets/Homepage/y (4).png";
import y5 from "../../assets/Homepage/y (5).png";
import y6 from "../../assets/Homepage/y (6).png";
import z1 from "../../assets/Homepage/z (1).jpg";
import z2 from "../../assets/Homepage/z (2).jpg";





export default function Home() {

  const products = useSelector(state => state.AllProducts)
  const singleproduct = useSelector(state => state.SingleProduct)
  const items = products.slice(0, 6)

  // console.log("productsnnnnnnnnnnnnnnnnnnnn", products);
  // console.log("singleproductnnnnnnnnnnnnnnnnnn", singleproduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // dispatch(ProductById('61a13f2a9b6b3cd7f9b46089'));
  }, []);

  const women = products.filter(product => product.category==="Women")
  const womenProduct= women.slice(0,6)
  const men=products.filter(product=>product.category==="Men") 
  const menProduct=men.slice(0,6)
  const gaming = products.filter(product => product.categoryparent==="Gaming")
  const gamesProducts=gaming.slice(0,6)
  const smartPhone = products.filter(product => product.categoryparent ==="smartPhone")
  const Detergent = products.filter(product => product.categoryparent ==="Detergent")
  const smartPhoneProducts=smartPhone.slice(0,6)
  // console.log("womenProducts",womenProduct)
  // console.log("menProducts",menProduct)
  // console.log("gamesProduct",gamesProducts)
  // console.log("smartPhoneProducts",smartPhoneProducts)







  const { t, i18n } = useTranslation();


  return (
    <div className="bg-light">
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />

      {/* under header */}
      <div className="row container mx-auto ">
        {/* left */}
        {/* <div className="col-lg-2  card rounded "> */}
          <CatList />
        {/* </div> */}
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
            <ImageContainer img={image11} />
          </div>
        </div>
      </div>

      {/* padge */}
      <div className="row container mx-auto mt-3">
        <SmallCard statement={t('Official Stores')} pic={padge1} className="col-3" />
        <SmallCard statement={t('Jumia Global')} pic={padge2} className="col-3" />
        <SmallCard statement={t('Recharge&Bill')} pic={padge3} className="col-3" />
        <SmallCard statement={t('Orange Points')} pic={padge4} className="col-3" />
        {/* <ProductCard pic={pic1} /> */}
      </div>

      {/* caresoul products */}
      <div className="container card mt-3">

          <div className="row">
            <div className="col-12  pt-2 ">
              <p className="fw-bold fs-5 ps-2">{t('TopSellingItems')}</p>
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
        <TextCenter title={t("TopDeals")} />
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={card1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={card1x} wid="w-100" />
          </div>
        </div>
      </div>

      {/* <!--  Execlusive Today section --> */}

      <div className="container card mt-4">
        <TextCenter title={t('ExeclusiveToday')} />
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
        <SeeAll color="#FFFFFF" background="#B60000" title={t('WeakendClearnace')} />
        <div className="row mt-3">
          {
            Detergent.map((item, index) => {
              return (
                <div className="col-md-2 mb-4" key={index}>
                  <Link to="/singleProduct"><ProductCard product={item} /></Link>
                  
                  {/* {console.log("item", item)} */}
                </div>
              );
            })}
        </div>
      </div>


      {/*  NEW OFFERS EVERYDAY ON EVERYTHING */}
      <div className="container  card mt-4">
        <TextCenter title={t('NEWOFFERS')} />
        <SmallImagesContainer text1="Men's Fashion" text2="Women's Fashion" text3="Beauty & perfumes" text4="Mobile & Accessories" text5="Home & Appliances" text6="Laptop & Accessories"
          img1={x6}
          img2={x10}
          img3={x11}
          img4={x7}
          img5={x2}
          img6={x5}/>

        {/* iiiiiiiiiiiiii */}
        <SmallImagesContainer text1="TVs & Gaming" text2="Sporting" text3="Kids & Baby" text4="Car Essentials" text5="Food & Beverage" text6="Household Care"
          img1={x9}
          img2={x8}
          img3={x4}
          img4={x12}
          img5={x1}
          img6={x3}/>
      </div>

      {/* <!-- <!-- Mother Care --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={ChidCare} wid="w-100" />
          </div>
        </div>
      </div>


      
      {/* <!--  MORE DEALS & OFFERS --> */}
    <div className="container  card mt-4">
        <TextCenter title={t('MOREDEALS')}/>
        <div className=" HomePage-img  row p-1">
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={JumiaFood1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON">
            <ImageContainer img={JumiaFood2} wid="w-100" />
          </div>
        </div>
      </div>


      {/*Most Liked Products*/}
      <div className="container mt-4 card">
        <SeeAll    className="container-fluid" color="black" background="#C7C7CD" title={t('MostLikedProducts')} />
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



      {/* <!--  Pick For You --> */}
      <div className="container  card mt-3 px-4 pb-1">
        <TextCenter title={t('PickForYou')} />
        <div className="   row ">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={Pickforyou} wid="w-100" />
          </div>
        </div>
      </div>


      {/*Women's Sweatshirts | Up to 50% OFF */}
      <div className="container mt-4 card ">
        <SeeAll color="black" background="#C7C7CD" title={t("Women'sFashion")} />
        <div className="row mt-3">
          {
            
           
            
            womenProduct.map((item, index) => {
              return (
                <div className="col-md-2 mb-4" key={index}>
                  <ProductCard product={item} />
                  {/* {console.log("item", item)} */}
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="container  card mt-4">
        <SmallImagesContainer img1={y1}
          img2={y2}
          img3={y3}
          img4={y4}
          img5={y5}
          img6={y6}/>
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
        <SeeAll color="black" background="#C7C7CD" title={t("Men'sFashion")} />
        <div className="row mt-3">
          {
            menProduct.map((item, index) => {
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

      {/*Games | Up to 30% OFF */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title={t('Games')} />
        <div className="row mt-3">
          {
            gamesProducts.map((item, index) => {
              return (
                <div className="col-md-2 mb-4" key={index}>
                  <ProductCard product={item} />
                  {/* {console.log("item", item)} */}
                </div>
              );
            })}
        </div>
      </div>
{/* 
      <div className="container  card mt-4">
        <SmallImagesContainer img1={card6}
          img2={card6}
          img3={card6}
          img4={card6}
          img5={card6}
          img6={card6}/>
      </div> */}


      {/* <!-- <!-- personalcare --> --> */}
      <div className="container card mt-4">
        <div className=" HomePage-img  row px-2">
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={flash} wid="w-100" />
          </div>
        </div>
      </div>



      {/*SmartPone */}
      <div className="container mt-4 card">
        <SeeAll color="black" background="#C7C7CD" title={t('SmartPone')} />
        <div className="row mt-3">
          {
            smartPhoneProducts.map((item, index) => {
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
        <TextCenter title={t("SubscribeNow")} />
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
        <SeeAll color="black" background="#C7C7CD" title={t('NewOnJumia')} />
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
            <ImageContainer img={z1} wid="w-100" />
          </div>
          <div className="col HomePage-imgElementNON m-2">
            <ImageContainer img={z2} wid="w-100" />
          </div>
        </div>
      </div>



      {/*  Be Prepared for winter */}
      <div className="container  card mt-4">
        <TextCenter title={t('BePreparedforwinter')} />
        <SmallImagesContainer text1="men Autumn Fashon" text2="All In Black" text3="Dress Like a Boss" text4="Your Style Rules" text5="Baby Comfort" text6="Wedding Home"
          img1={L1}
          img2={L2}
          img3={L12}
          img4={L4}
          img5={L5}
          img6={L6} />

        {/* iiiiiiiiiiiiii */}
        <SmallImagesContainer text1="Busy Mums" text2="Breakfast Essentials" text3="Holiday Break" text4="Capture Your Moments" text5="Women Autumn Fashon" text6="More Collections"
          img1={L7}
          img2={L8}
          img3={L9}
          img4={L11}
          img5={L10}
          img6={L3} />
      </div>


      <JumiaInfo />
      <Footer1 />
    </div>
  );
}
