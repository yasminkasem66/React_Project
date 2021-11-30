import React from "react";
import AddressDetails from "../../Component/AddressDetails/AddressDetails";
import CheckoutOrder from "../../Component/CheckoutOrder/CheckoutOrder";
import DelivaryMethod from "../../Component/DelivaryMethod/DelivaryMethod";
import DelivaryMethod2 from "../../Component/DelivaryMethod2/DelivaryMethod2";
import CheckHeader from "../../Component/Headers/CheckoutHeader/CheckHeader";
import Paymentmethod from "../../Component/Paymentmethod/Paymentmethod";
import PaymentMethod2 from "../../Component/PaymentMethod2/PaymentMethod2";

export default function NextCheckout() {
  return (
    <>
      <CheckHeader />
      <div className="container-fluid mt-5  justify-content-center  ">
        <div className="row  mb-5 justify-content-center text-start ">
          <div className="col-lg-6 text-start">
            <AddressDetails />
            <DelivaryMethod2 />
            <PaymentMethod2 />
          </div>
          <div className="col-lg-3">
            <CheckoutOrder />
            {/* <CheckoutHelp/> */}
          </div>
        </div>
      </div>
    </>
  );
}
