import React from "react";
import "./SellerLogin.scss";
import img from '../../../src/assets/imgs/Sellerlogo.png'
export default function SellerLogin() {
  return (
    <>
      <div className="container">
        <div className="row  pt-3  bordered ">
          <div className="col-2 pb-3">
          <img src={img} alt="" />
          </div>
        
        </div>
        <div className="row mx-auto my-5">
          
          <div className="col-12 pt-2 " style={{"background":"#f2f2f2"}}>
          <h5 className>Add Seller Account Information</h5>
            <form>
              {/* Shope */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle ">Shope&nbsp;*</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    name="shop_name"
                    required
                    maxlength="255"
                  />
                  <p className="desc">
                    Choose a unique name for your online shop: this is the name
                    that will appear on the Jumia marketplace! It is forbidden
                    to use a registered trademark in your shop name without the
                    brand authorisation.
                  </p>
                </div>
              </div>
              {/* company type */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">
                    Please select if you're an Individual or Business
                    Entity/Company&nbsp;*
                  </label>
                </div>
                <div className="col-9">
                  <select>
                    <option value="">-Choose an option-</option>
                    <option value="0">Business Entity /Company</option>
                    <option value="1">Indvidual.</option>
                  </select>
                </div>
              </div>
              {/* manager name */}
              <div className=" row pt-2 ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Account Manager First and Last Name&nbsp;*</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    name="shop_name"
                    required
                    maxlength="255"
                  />
                  <p className="desc">
                  Your name or the name of the person in your team who
                          will manage your account. This is the contact we will
                          primarily use to contact you.
                  </p>
                </div>
              </div>
              {/* phone number */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Account manager phone number *</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    name="shop_name"
                    required
                  />
                  <p className="desc">
                  When we need to contact you urgently, this is the number we will call.
                  </p>
                </div>
              </div>
              {/* Additional phone number */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Additional phone number</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    name="shop_name"
                  />
                  <p className="desc">
                  Another number where we can reach you ?
                  </p>
                </div>
              </div>
              {/* emeail */}
              <div className=" row ">
                <div className="col-3 d-inline text-end" >
                  <label className="Ltitle  ">Email Address *</label>
                </div>
                <div className="col-9">
                  <input
                    type="email"
                    name="shop_name"
                    required
                    maxlength="255"
                  />
                  <p className="desc">
                  Your account will be linked to this email address and we will use it to send all our communications.
                  </p>
                </div>
              </div>
              {/* confirm email */}
              <div className=" row  "> 
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Retype Email Address *</label>
                </div>
                <div className="col-9">
                  <input
                    type="email"
                    name="shop_name"
                    required
                   
                  />
                  
                </div>
                {/* password */}
              </div>
              <div className=" row  pt-3">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Password *</label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    name="spassword"
                    required
                    maxlength="255"
                  />
                  <p className="desc">
                  At least 8 characters containing a capital letter, a lower letter and a numeric character
                  </p>
                </div>
              </div>
              {/* cofirm password */}
              <div className=" row ">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Retype Password *</label>
                </div>
                <div className="col-9">
                  <input
                    type="password"
                    name="shop_name"
                    required
                   
                  />
                </div>
              </div>
              {/* Ecotract  */}
              <div className=" row  pt-3">
                <div className="col-3 d-inline text-end">
                  <label className="Ltitle  ">Econtract Egypt&nbsp;*</label>
                </div>
                <div className="col-9">
                <input
                          type="checkbox"
                         
                        />
                        <span  class="help-block help-block-column">
                          
                        &nbsp;I have read and accepted 
                          <a
                            href="/user/signup/tcagreementcontent/page/334"
                            data-modalprint="true"
                            > &nbsp;Econtract Egypt</a
                          >
                        </span>
                </div>
               
              </div>
              {/* submit */}
              <div className=" row justify-content-end mt-2   pe-3">
              
              <button
              type="button"
                className="btn Btn  fw-bolder  text-white  col-2  "
                
              >
                Continue
              </button>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
