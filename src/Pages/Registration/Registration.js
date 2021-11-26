import React from 'react'
import MiddleHeader from '../../Component/Headers/MiddleHeader/MiddeleHeader'
import LowerHeader from '../../Component/Headers/LowerHeader/LowerHeader'
import Footer1 from '../../Component/Footer1/Footer1'
export default function registration() {
    return (
        <div>
            <MiddleHeader/>
            <LowerHeader/>
            <section className="loginPage py-5">
  <div className="container-lg ">
    <div className="row justify-content-center">
      <div className="col-lg-8 ">
        <div className="section-title">
          <h4 className="fw-bold mb-5 text-start" style={{ color: "#f68b1e" }}>
            Create Account{" "}
          </h4>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8 ">
        <div className="contact form">
          <form action>
            <div className="row py-4">
              <div className="col mb-4  border-muted  border-bottom  me-4">
                <input
                  className="form-control form-control-lg fs-6 border-0"
                  type="text"
                  name
                  placeholder="First Name"
                />
              </div>
              <div className="col  mb-4 border-muted  border-bottom  me-4">
                <input
                  className="form-control form-control-lg fs-6 border-0"
                  type="text"
                  name
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row py-4">
              <div className="col mb-4 border-muted  border-bottom  me-4">
                <input
                  className="form-control form-control-lg fs-6 border-0"
                  type="email"
                  name
                  placeholder="E-mail"
                />
              </div>
              <div className="col  mb-4 border-muted  border-bottom  me-4">
                <input
                  className="form-control form-control-lg fs-6 border-0"
                  type="password"
                  name
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row py-4">
              <span className="col-lg-1  mb-4 border-muted  border-bottom  me-4">
                <span className="text-muted">+20</span>
              </span>
              <div className="col-lg-5  mb-4 border-muted  border-bottom  me-4">
                <input
                  className="form-control form-control-lg fs-6 border-0"
                  type="text"
                  name
                  placeholder="Phone Number (optional)"
                />
              </div>
            </div>
            {/* <div class="row py-4">
                      <div class="col-lg-12  mb-4 border-muted  border-bottom  me-4">
                          <button type="submit" class="btn btn-danger px-3">Send Message </button>
                      </div>
                  </div> */}
            <div className="row ">
              <div className="text-start">
                <input
                  type="checkbox"
                  defaultValue={1}
                  id="terms"
                  name="terms"
                />
                <label className="ms-2" htmlFor="fi-terms">
                  I accept the
                </label>
                <a
                  className=" "
                  target="_blank"
                  rel="noopener"
                  href="/conditions/"
                  style={{ color: "#f68b1e" }}
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div className="row py-4">
              <div className="text-start">
                <input
                  type="checkbox"
                  defaultValue={1}
                  id="newsletter"
                  name="newsletter"
                  defaultChecked
                />
                <label className="ms-2" htmlFor=" ">
                  I want to receive Jumia Newsletters with the best deals and
                  offers
                </label>
              </div>
            </div>
            <div className="col10 -hr -mtl" data-mid-txt="OR">
              <a
                className="btn _fb _i -mtl"
                href="https://www.facebook.com/v3.2/dialog/oauth?state=55dda13d287d4e4cf0199b780cc7d1fa&redirect_uri=https%3A%2F%2Fwww.jumia.com.eg%2Fcustomer%2Ffacebook%2Flogin%2F&scope=public_profile%2Cemail&response_type=code&approval_prompt=auto&client_id=413652859092940"
              >
                <svg viewBox="0 0 24 24" className="ic" width={24} height={24}>
                  <use xlinkHref="https://www.jumia.com.eg/assets_he/images/i-icons.e70b7734.svg#facebook" />
                </svg>
                <span />
              </a>
            </div>
            <div className="col10 -tac -pvl -mvl">
              <div className="row py-4 col-rows-1">
                <div className=" ">
                  <button
                    className="btn btn-primary border border-none p-2 w-100 rounded  fs-5 fw-bold"
                    style={{ backgroundColor: "#f68b1e" }}
                  >
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>
              <div className="row py-3 col-rows-1">
                <div className="col-12">
                  <button
                    className="btn btn-primary border border-none p-2 w-100 rounded  fs-5  fw-bold m"
                    style={{ backgroundColor: "#344f88" }}
                  >
                    <span className="d-flex justify-content-between text-uppercase"><i  className="fab fa-facebook-square" /><span>  Register with Facebook</span><span></span></span>

                  </button>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8 ">
                  <div className="section-title text-center">
                    <p className> Already have an account?</p>
                    <a
                      className="text-decoration-none link-light  fw-bold "
                      href="/customer/account/login/"
                      style={{ color: "#f68b1e" }}
                    >
                      LOGIN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
        <Footer1/>
        </div>
    )
}
