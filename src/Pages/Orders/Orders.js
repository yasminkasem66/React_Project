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
import { getAllProducts } from '../../Store/actions/ProductActions/getAllProducts';


import { getAllUsers } from '../../Store/actions/UserActions/userActions';
import { signout } from '../../Store/actions/authen/authen';
import { useNavigate } from 'react-router';
import { getSingleUser } from '../../Store/actions/UserActions/getSingleUser';
import OrderComponent from '../../Component/OrderComponent/OrderComponent';


export default function Orders() {

    const id =JSON.parse(localStorage.getItem("user")).userId 
  console.log("idddddddddddddddddddd",id)
  let navigate = useNavigate();
  const user = useSelector((state) => state.users);
  console.log("userrrrrrrrrrrrrrrrr",user)
  const products = useSelector(state => state.AllProducts)
  const items = products.slice(0, 3)

  console.log("products", products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getSingleUser(id));
  }, []);


  const users = useSelector(state => state.users)
  

  console.log("users", users);
  const dispatch2 = useDispatch();

  useEffect(() => {
    dispatch2(getAllUsers());
  }, []);


  const logout=() => {
    dispatch(signout())
    navigate('/')
  }


    return (
        <>
      <ImageContainer img={image1} color={"#a42924"} />
      <MiddeleHeader />
      <LowerHeader />
      <section className="row container d-flex  m-auto main-sectionFirst mb-5">
          <MyaccountList logout={logout}/>
           <div
  className="col-md-9 row   ms-2   "
  style={{
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
    backgroundColor: "white",
    borderRadius: 4
  }}
>

<div>
  <h3 className="pt-2">Orders</h3>
  <hr />
  <h5 className="pt-2" style={{ color: "#f68b1e", fontWeight: 500 }}>Open orders</h5>
  <hr />
</div>
<div className="row mb-3">
    <OrderComponent className="mb-2"  image=" " name=""   />
   

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






