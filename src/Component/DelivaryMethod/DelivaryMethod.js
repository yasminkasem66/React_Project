import React from "react";
import './DelivaryMethod.scss'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
export default function DelivaryMethod() {
  return (
    <div>
      <>
        {/* Hello world */}
        <div className="card mb-3 p-3 mt-3">
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
            <p>Delivered between Sunday 5 Dec and Thursday 9 Dec. for EGP 114</p>
            <div className="border p-2 mb-2 fw-bolder doortxt ">
                <p>
                * Living in Cairo, Giza or Alexandria, JUMIA PRIMO Members enjoy free delivery on all local orders and Jumia Food.
                </p>
                <p>
                *Please make sure you have entered your home address, not your office one, so that we can deliver your order successfully
                </p>
            </div>
          </div>
          <div className="form-check  pt-3 ps-5">
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
          </div>
          <div className="card ">
          <div className="card-header  bg-white fw-bolder fs-6">SHIPMENT DETAILS</div>
          <div className="card-body">
            <h5 className="card-title">
            Shipment 1 of 2
            </h5>
            <p className="card-text">
            1xSuper Emollient Moisturizing Cream Kit - 4 Pcs
            </p>
            <p className="card-text">
            Delivered between Sunday 5 Dec and Tuesday 7 Dec.
            </p>
          </div>
          </div>
          </div>
        
          <p>Subtotal</p>
          <p>Shipping amount</p><hr/>
          <p className="fw-bolder">Total</p>
          <p className="text-center  vouchertxt">You will be able to add a voucher in the next step</p>
          <button type="button" class="btn proceedBtn text-white fw-bolder mx-3">PROCEED TO NEXT STEP</button>
        </div>
      </>
    </div>
  );
}
