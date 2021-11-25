import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import ar from "../../../assets/imgs/ar.png";
// import en from "../../../assets/imgs/en.png";

import ar from '../../../assets/imgs/uk.svg'
import en from '../../../assets/imgs/eg.svg'

export default function MiddeleHeader() {
  return (
    <>
      <nav className="p-4 bg-light border-bottom " id="Sell-on-Jumia ">
        {/* start row */}
        <div className="row container d-flex justify-content-between m-auto  ">
          {/* col-2 */}
          <div className="col-lg-2 col-md-12">
            <a href="#" className="text-decoration-none  link-dark ms-4 ">
              <span style={{ color: "#f68b1e", fontWeight: "bold" }}>
                <i className="fad fa-star" /> Sell on Jumia{" "}
              </span>
            </a>
          </div>
          {/* col-7 */}
          <div className="col-lg-7 col-md-12">
            <ul className="d-flex justify-content-center list-unstyled ">
              <li className="me-3">
                <a href="#" className="text-decoration-none  link-dark ms-4 ">
                  <span style={{ color: "#f68b1e", fontWeight: "bold" }}>
                    <i className="fad fa-star" /> FOOD
                  </span>
                </a>
              </li>
              <li className="me-3">
                <a
                  className="text-secondary text-decoration-none  link-dark ms-4 "
                  href="#"
                >
                  <i className="fas fa-crown" /> PRIMO
                </a>
              </li>
              <li className="me-3">
                <a
                  className="text-secondary text-decoration-none  link-dark ms-4 "
                  href="#"
                >
                  <i className="fad fa-star" /> REWARDS
                </a>
              </li>
              <li>
                <a
                  className="text-secondary text-decoration-none  link-dark ms-4 "
                  href="#"
                >
                  <i className="fad fa-shield-alt" /> PAY
                </a>
              </li>
            </ul>
          </div>
          {/* col-3 */}
          <div className="col-lg-3 col-md-12 me-0">
            <ul className="d-flex justify-content-center list-unstyled ">
              <a
                className="text-decoration-none  link-dark me-4 socialIcon"
                href="#"
              >
                <li className="d-flex">
                  <img
                    className="rounded-circle"
                    width="25px"
                    height="25px"
                    src={en}
                  />
                  English
                </li>
              </a>
              |
              <a
                className="text-decoration-none  link-dark ms-4 socialIcon "
                href="#"
              >
                <li className="d-flex">
                  <img
                    className="rounded-circle"
                    width="25px"
                    height="25px"
                    src={ar}
                  />
                  عربي
                </li>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
