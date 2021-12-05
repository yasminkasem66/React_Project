import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/imgs/Jumia-logo.png";

export default function CheckHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
         <Link to="/"><img className="img-fluid col-2 m-0" src={img} alt="" /></Link> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-item ms-5">
                  <i class="fas fa-phone-alt"></i>
                  Need Help? Contact us 19586
                </span>
              </li>
              <li className="nav-item ms-5 ">
                <span>
                  <i class="fas fa-shield-alt"></i>Secure Payment
                </span>
              </li>
              <li className="nav-item ms-5">
                <span>
                  <i class="fas fa-undo-alt"></i>Easy Returns
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
