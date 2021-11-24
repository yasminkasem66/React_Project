
import React from 'react'
import img from '../../assets/imgs/jumia-brand.webp'
import './Footer2.scss'
export default function Footer2() {
    return (
        <div>
            ;<>
  {/* start all footers */}
  <footer className="  footerOne ">
    <div className="container text-start">
      {/* first row  */}
      <div className="row align-items-center align-items-stretch   ">
        <div className="col-md-6 py-4 py-md-4   ">
          <div className="row g-1 ">
            <div className="col-sm-3">
              <img src={img} alt="" className="w-75 rounded" />
            </div>
            <div className="col-sm">
              <div className="text-1 ">Jumia in your pocket!</div>
              <p className="text-2  ">Get Jumia app and order on the go</p>
              <p className="text-3  ">
                FREE DOWNLOAD NOW
                <span>
                  <i className="fab fa-apple" />
                </span>
                <span>
                  <i className="fab fa-android" />
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="col-md-6 py-4 py-md-4 aside-stretch ">
          <div className="text-5">Subscribe to our communications!</div>
          <p className="text-6">
            Subscribe to receive special offers and latest news.
          </p>
          <div className="row g-3">
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
                aria-label="City"
              />
            </div>
            <div className="col-sm ">
              <button
                type="button"
                name="gender"
                value="male"
                className=" form-control btn btn-outline-light formBtn"
              >
                <span>Male</span>
              </button>
            </div>
            <div className="col-sm">
              <button
                type="button"
                name="gender"
                value="female"
                className=" form-control btn btn-outline-light formBtn"
              >
                <span>Female</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end first row */}
    </div>
  </footer>
  <footer
    className="footer2  text-start pb-5 px-3 "
    style={{ backgroundColor: "#434343" }}
  >
    <div className="container">
      {/* row */}
      <div className="row py-4">
        {/* one */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          <span className="footer-heading ">LET US HELP YOU</span>
          <ul className="list-unstyled pt-3">
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/help/"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/contact/"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/how-to-shop/"
              >
                How to buy on Jumia?
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/how-to-pay/"
              >
                How to pay on Jumia?
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/delivery-timelines/"
              >
                Delivery timelines
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/sp-returns-refunds/"
              >
                Return Policy{" "}
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/jumia-corporate/"
              >
                Corporate Services
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://docs.google.com/forms/d/1poBfqrj0bXCtkvJIm_24mLCTdvKJNebDB7-ATHZwRW4/edit"
              >
                Report a Product
              </a>
            </li>
          </ul>
        </div>
        {/* two */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          <span className="footer-heading ">ABOUT JUMIA EGYPT</span>
          <ul className="list-unstyled pt-3">
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/about_us/?internal=footer"
              >
                About us
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/careers/?internal=footer"
              >
                Jumia Careers
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/terms-of-use/?internal=footer"
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/privacy/?internal=footer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/jumia-express/?internal=footer"
              >
                Jumia Express
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/jumia-mall/?internal=footer"
              >
                Jumia Mall
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="/sp-jumia-services/?internal=footer"
              >
                Jumia Logistics Services
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/mlp-black-friday/"
              >
                Jumia Black Friday
              </a>
            </li>
          </ul>
        </div>
        {/* three */}
       
        <div className="col-lg-3 col-md-6 mb-md-0 mb-4">
          <span className="footer-heading ">JUMIA INTERNATIONAL</span>
          <div className=" row row-cols-2">
            <ul className="list-unstyled pt-3">
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.dz/"
                >
                  Algeria
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.ci/"
                >
                  Ivory Coast{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.com.gh/"
                >
                  Ghana
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.co.ke/"
                >
                  Kenya
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.ma/"
                >
                  Morocco
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.com.ng/"
                >
                  Nigeria
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.sn/"
                >
                  Senegal
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.com.tn/"
                >
                  Tunisia
                </a>
              </li>
              <li>
                <a
                  className="text-decoration-none text-white link-light"
                  href="https://www.jumia.ug/"
                >
                  Uganda
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* four */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          <span className="footer-heading ">JOIN US ON</span>
          <div className="list-unstyled pt-2 pb-4">
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-facebook-f  socialIcon " />
            </a>
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-twitter socialIcon  " />
            </a>
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-instagram socialIcon" />
            </a>
            <a
              className=" text-decoration-none me-3 fs-4 link-light"
              href="https://www.jumia.com.eg/help/"
            >
              <i className="fab fa-youtube socialIcon" />
            </a>
          </div>
          <span className="footer-heading ">PAYMENT METHODS</span>
         
          <div className="list-unstyled pt-2  pb-4">
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Payment on delivery"
            >
              <i className="fas fa-hand-holding socialIcon " />
            </a>
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Mastercard"
            >
              <i className="fab fa-cc-mastercard  socialIcon " />
            </a>
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Visa"
            >
              <i className="fab fa-cc-visa  socialIcon " />
            </a>
            <a
              href="https://www.jumia.com.eg/help/"
              className=" text-decoration-none me-3 fs-4 link-light"
              title="Fawry"
            >
              <i className="fas fa-money-bill-wave socialIcon" />
            </a>
          </div>
        </div>
        
      </div>
      {/* second row */}
      <div className="row py-4 border-bottom border-secondary  ">
        {/* one */}
        <div className="col-lg-3 col-md-6  mb-md-0 mb-4">
          <span className="footer-heading ">MAKE MONEY WITH JUMIA</span>
          <ul className="list-unstyled pt-3">
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://vendorhub.jumia.com.eg/terms-and-agreements/"
              >
                Sell on Jumia
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/logistics-service-partner/?internal=footer"
              >
                Become a Logistics Service Partner
              </a>
            </li>
            <li>
              <a
                className=" text-decoration-none text-white link-light"
                href="https://www.jumia.com.eg/jforce-consultant/"
              >
                Become a Sales Consultant (J-Force )
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* end row tow */}
    </div>
  </footer>
</>

        </div>
    )
}
