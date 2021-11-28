import React, { useEffect } from 'react'
import MyaccountList from '../../Component/MyaccountList/MyaccountList'
import image1 from "../../assets/imgs/ads.jpeg";
import ImageContainer from '../../Component/ImageContainer/ImageContainer';
import MiddeleHeader from '../../Component/Headers/MiddleHeader/MiddeleHeader';
import LowerHeader from '../../Component/Headers/LowerHeader/LowerHeader';
import Footer1 from '../../Component/Footer1/Footer1';
import DetailsCard from '../../Component/DetailsCard/DetailsCard';
import Carsoual from '../../Component/Carsoual/Carsoual';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Store/actions/productActions';
import { getAllUsers } from '../../Store/actions/userActions';




export default function Myaccount() {

    const products = useSelector(state => state.products)
  const items = products.slice(0, 3)

  console.log("products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  const users = useSelector(state => state.users)
  

  console.log("users", users);
  const dispatch2 = useDispatch();

  useEffect(() => {
    dispatch2(getAllUsers());
  }, []);

    return (
        <>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <section className="row container d-flex  m-auto main-sectionFirst mb-5">
           <MyaccountList/>
           <div
  className="col-md-9 row   ms-2   "
  style={{
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
    backgroundColor: "white",
    borderRadius: 4
  }}
>

<header>
  <h3 className="pt-2">Account Overview</h3>
  <hr />
</header>
<div className="row mb-3">
    <DetailsCard className="mb-2"  header="ACCOUNT DETAILS" main="Mohamed Gaber" secondary="gabermohamed772@gmail.com" orangePart="Change Password"  />
    <DetailsCard className="mb-2"  header="ADDRESS BOOK" main="Your default shipping address:" 
    secondary="Mohamed Gaber 15 st Aziz antwan Seouf shamaa victoria first floorAl Seyouf, Alexandria+20 1204810748 /"
     orangePart="" />
    <DetailsCard className="mb-2"  header="JUMIA PRIMO" main="Jumia Primo" 
    secondary="Jumia Primo is a loyalty program which offers members free delivery on all Jumia Items (excluding Jumia Global) and Jumia Food orders, plus exclusive access to promotions & deals"
     orangePart="SUBSCRIBE JUMIA PRIMO" />
    <DetailsCard className="mb-2"  main="EGP 0.00" />

</div>






</div>

      </section>
      {/* currousel */}


      <div className="container card mt-3 mb-5">

<div className="row">
  <div className="col-12  pt-2 text-start">
    <p className="fw-bold fs-5 ps-2">Recommended for you</p>
  </div>
</div>

<div className=" HomePage-img  row p-1">
<div className="col ">
  <Carsoual products={products} />
</div>
</div>

</div>

<div className="container card mt-3 mb-5">

<div className="row">
  <div className="col-12  pt-2 text-start">
    <p className="fw-bold fs-5 ps-2"> Recently Viewed</p>
  </div>
</div>

<div className=" HomePage-img  row p-1">
<div className="col ">
  <Carsoual products={items} />
</div>
</div>

</div>











      <Footer1 />

            
        </>
    )
}
