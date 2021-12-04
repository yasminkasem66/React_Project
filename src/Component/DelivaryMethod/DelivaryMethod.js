import React from "react";
import './DelivaryMethod.scss'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { Link } from "react-router-dom";
export default function DelivaryMethod() {
  return (
    <div>
      <>
        {/* Hello world */}
        <div className="card mb-3 pb-3 mt-3">
          <div className="card-header bg-white fw-bolder "><CheckCircleRoundedIcon color="disabled"/>2. DELIVERY METHOD</div>
          
          <div className="card-body">
            <h5 className="card-title  fw-bolder fs-6 ps-3" >
              How do you want your order delivered?
            </h5>
            <div className="form-check  pt-3 ps-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label fw-bolder" htmlFor="flexRadioDefault1">
            Door Delivery.
            </label>
            <p className="DeliveredDes">Delivered between <span className="delevaryDays">Sunday 5 Dec</span>  and<span  className="delevaryDays">Thursday 9 Dec</span> . for <span className="cash">EGP 114</span></p>
            <div className="border p-2 mb-2 fw-bolder doortxt ">
                <p>
                * Living in Cairo, Giza or Alexandria, <span className="cash">JUMIA PRIMO </span> Members enjoy free delivery on all local orders and Jumia Food.
                </p>
                <p>
                *Please make sure you have entered your home address, not your office one, so that we can deliver your order successfully
                </p>
            </div>
          </div>
          {/* <div className="form-check  pt-3 ps-5">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label fw-bolder" htmlFor="flexRadioDefault1">
            Pickup Station
            </label>
            <p>ready for pick up between Sunday 28 Nov and Tuesday 14 Dec with cheaper shipping fees.</p>
            <div className="border p-2 mb-2 fw-bolder doortxt ">
                <p>
                Select the nearest location to you, and enjoy Free shipping on your order when you use JumiaPay.
                </p>
            </div>
          </div> */}
          <div className="card ms-4 mt-4">
          <div className="card-header  bg-white fw-bolder ">SHIPMENT DETAILS</div>
          <div className="card-body">
            <p className="card-title fw-bolder DeliveredDes " >
            Shipment 
            </p>
            <p className="card-text DeliveredDes">
            1xSuper Emollient Moisturizing Cream Kit - 4 Pcs
            </p>
            <p className="DeliveredDes">Delivered between <span className="delevaryDays">Sunday 5 Dec</span>  and<span  className="delevaryDays">Thursday 9 Dec</span> </p>

          </div>
          </div>
          </div>
          <div className="ps-5">
          <p className="fw-light">Subtotal</p>
          <p className="fw-light">Shipping amount</p><hr/>
          
          <p className="fw-bold">Total</p>
          </div>
          
          <p className="text-center  vouchertxt">You will be able to add a voucher in the next step</p>
          <Link to="/nextcheckout">
          <button type="button" class="btn proceedBtn text-white fw-bolder mx-3">PROCEED TO NEXT STEP</button>

          </Link>
          {/* <button type="button" class="btn proceedBtn text-white fw-bolder mx-3">PROCEED TO NEXT STEP</button> */}
        </div>
      </>
    </div>
  );
}
