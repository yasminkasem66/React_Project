import React from 'react';
import './Footer1.scss';
import uk from '../../assets/imgs/uk.svg'
import Egy from '../../assets/imgs/eg.svg'
import Jumia from '../../assets/imgs/lg-jumia.png'
import Icon from '../../assets/imgs/icon.png'

export default function Footer1() {


    return (
        <>
            {/* start all footers */}
            <footer className="footer text-white bg-dark px-3 d-none   d-lg-block    ">
                <div className="container">
                    {/* first row  */}
                    <div className="row align-items-center align-items-stretch bb-5  g-4 pb-4">
                        {/* one */}
                        <div className="col-lg-2 col-md-12 py-4 py-md-4 aside-stretch ">
                            <div>
                                <img src={Jumia} alt="jumia-logo" className="w-50" />
                            </div>
                        </div>
                        {/* two */}
                        <div className="col-lg-6 col-md-12 py-4 py-md-4 aside-stretch ">
                            <div className="f-t -pbs">New to Jumia?</div>
                            <p className>
                                Subscribe to our newsletter to get updates on our latest offers!
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
                                <div className="col-sm-2">
                                    <button
                                        type="button"
                                        name="gender"
                                        value="male"
                                        className=" form-control btn btn-outline-light p-1"
                                    >
                                        <span>Male</span>
                                    </button>
                                </div>
                                <div className="col-sm-2">
                                    <button
                                        type="button"
                                        name="gender"
                                        value="female"
                                        className=" form-control btn btn-outline-light p-1"
                                    >
                                        <span>Female</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* three */}
                        <div className="col-lg-3 col-md-12 py-4 py-md-4  ms-5 ">
                            <div className="row g-1 mb-2 ">
                                <div className="col-lg-3">
                                    <img src={Icon} alt="icom" className="w-75 rounded" />{" "}
                                </div>
                                <div className=" col-lg-9">
                                    <div className=" ">DOWNLOAD JUMIA FREE APP</div>
                                    <p className="  ">Get access to exclusive offers!</p>
                                </div>
                            </div>
                            <div className="row   row-cols-2">
                                <div className="col ">
                                    <a
                                        href="#"
                                        className="btn btn-outline-light  "
                                        tabIndex={-1}
                                        role="button"
                                        aria-disabled="true"
                                    >
                                        {" "}
                                        <i className="fab fa-apple  me-1" aria-hidden="true" />
                                        Apple Store
                                    </a>
                                </div>
                                <div className="col ">
                                    <a
                                        href="#"
                                        className="btn btn-outline-light"
                                        tabIndex={-1}
                                        role="button"
                                        aria-disabled="true"
                                    >
                                        <i className="fab fa-google-play   " aria-hidden="true" />
                                        Google Play
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end first row */}
                </div>
            </footer>
            {/* second footer */}
            <footer
                className="footer2 text-white  pb-5 px-3 "
                style={{ backgroundColor: "#323232" }}
            >
                <div className="container">
                    {/* row */}
                    <div className="row py-4">
                        {/* one */}
                        <div className="col-lg-3 col-6  mb-md-0 mb-4  d-none   d-md-block">
                            <span className="footer-heading ">LET US HELP YOU</span>
                            <ul className="list-unstyled pt-3 ">
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/help/"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="contact.html"
                                    >
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/how-to-shop/"
                                    >
                                        How to buy on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/how-to-pay/"
                                    >
                                        How to pay on Jumia?
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/delivery-timelines/"
                                    >
                                        Delivery timelines
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/sp-returns-refunds/"
                                    >
                                        Return Policy{" "}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/jumia-corporate/"
                                    >
                                        Corporate Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://docs.google.com/forms/d/1poBfqrj0bXCtkvJIm_24mLCTdvKJNebDB7-ATHZwRW4/edit"
                                    >
                                        Report a Product
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* two */}
                        <div className="col-lg-3 col-6  mb-md-0 mb-4  d-none   d-md-block">
                            <span className="footer-heading ">ABOUT JUMIA EGYPT</span>
                            <ul className="list-unstyled pt-3 ">
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="about.html"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="/careers/?internal=footer"
                                    >
                                        Jumia Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="/terms-of-use/?internal=footer"
                                    >
                                        Terms and Conditions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="/privacy/?internal=footer"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="/jumia-express/?internal=footer"
                                    >
                                        Jumia Express
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="/jumia-mall/?internal=footer"
                                    >
                                        Jumia Mall
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="/sp-jumia-services/?internal=footer"
                                    >
                                        Jumia Logistics Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/mlp-black-friday/"
                                    >
                                        Jumia Black Friday
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* three */}
                        <div className="col-lg-3 col-6  mb-md-0 mb-4  d-none   d-md-block">
                            <span className="footer-heading ">MAKE MONEY WITH JUMIA</span>
                            <ul className="list-unstyled pt-3 ">
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://vendorhub.jumia.com.eg/terms-and-agreements/"
                                    >
                                        Sell on Jumia
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/logistics-service-partner/?internal=footer"
                                    >
                                        Become a Logistics Service Partner
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-decoration-none text-muted link-light"
                                        href="https://www.jumia.com.eg/jforce-consultant/"
                                    >
                                        Become a Sales Consultant (J-Force )
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* four */}
                        <div className="col-lg-3 col-6 mb-md-0 mb-4">
                            <span className="footer-heading  d-none   d-md-block">
                                JUMIA INTERNATIONAL
                            </span>
                            <div className=" row row-cols-2">
                                <ul className="list-unstyled pt-3 ">
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.dz/"
                                        >
                                            Algeria
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.ci/"
                                        >
                                            Ivory Coast{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.com.gh/"
                                        >
                                            Ghana
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.co.ke/"
                                        >
                                            Kenya
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.ma/"
                                        >
                                            Morocco
                                        </a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled pt-3 d-none   d-md-block">
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.com.ng/"
                                        >
                                            Nigeria
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.sn/"
                                        >
                                            Senegal
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.com.tn/"
                                        >
                                            Tunisia
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-decoration-none text-muted link-light"
                                            href="https://www.jumia.ug/"
                                        >
                                            Uganda
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="row py-4 border-bottom border-secondary  ">
                        {/* one */}
                        <div className="col-lg-3 col-6  mb-md-0 mb-4  d-none   d-md-block">
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
                        </div>
                        {/* two */}
                        <div className="col-lg-3 col-6  mb-md-0 mb-4  d-none   d-md-block">
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
                    {/* end row tow */}
                    {/* row three */}
                    <div className="row justify-content-end pt-2  ">
                        <div className="col-lg-8 col-md-7 ms-5">
                            <div className="section-title text-center  ">
                                <span className="me-2  ">
                                    <i className="far fa-star socialIcon" />
                                    <a
                                        href="https://www.jumia.com.eg/help/"
                                        className=" text-decoration-none me-3 fs-6 link-light"
                                        title="Fawry"
                                    >
                                        PRIMO
                                    </a>
                                </span>
                                <span className="me-2">
                                    <i className="fas fa-star-half-alt socialIcon" />
                                    <a
                                        href="https://www.jumia.com.eg/help/"
                                        className=" text-decoration-none me-3 fs-6 link-light"
                                        title="Fawry"
                                    >
                                        REWARDS
                                    </a>
                                </span>
                                <span className="me-2">
                                    <i className="fas fa-shield-alt socialIcon" />
                                    <a
                                        href="https://www.jumia.com.eg/help/"
                                        className=" text-decoration-none me-3 fs-6 link-light"
                                        title="Fawry"
                                    >
                                        PAY
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-4  ">
                            <div className="section-title text-center  ">
                                <span className="me-2">
                                    <img
                                        src={uk}
                                        alt="uk-flag"
                                        className="img-circle"
                                        style={{ width: 20 }}
                                    />
                                    <a
                                        href="https://www.jumia.com.eg/help/"
                                        className=" text-decoration-none me-3 fs-6 link-light"
                                        title="Fawry"
                                    >
                                        English
                                    </a>
                                </span>
                                <span className="me-2">
                                    {/* <i class="bi bi-shield-fill-check"></i> */}
                                    <img
                                        src={Egy}
                                        alt="ar-flag"
                                        className="img-circle"
                                        style={{ width: 18 }}
                                    />
                                    <a
                                        href="https://www.jumia.com.eg/help/"
                                        className=" text-decoration-none me-3 fs-6 link-light"
                                        title="Fawry"
                                    >
                                        Arabic
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )



}
