import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function LowerHeader() {
  return (
    <>
      <header
        className="pb-1 pt-2 mb-4 border-bottom  header-underNav  "
        id="navBarFixed"
      >
        <div className="row container d-flex justify-content-around m-auto align-items-center  ">
          <div className="col-lg-2 col-md-12">
            <a
              className="d-flex text-decoration-none  link-dark me-4 socialIcon"
              href="#"
            >
              <h2
                className="fw-bold mt-3"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                JUMIA
              </h2>
              <i style={{ fontSize: 25 }} className="mt-4 fas fa-cart-plus" />
            </a>
          </div>
          <div className="col-lg-7 col-md-12">
            <form className="d-flex">
              <input
                type="search"
                className="form-control"
                placeholder="Search Products, brands and Categories"
                aria-label="Search"
              />
              <input
                className="ms-2 bg-warning rounded border-warning text-light fw-bold"
                type="button"
                defaultValue="Search"
              />
            </form>
          </div>
          <div className="col-lg-3 col-md-12 mt-2">
            <ul className="d-flex justify-content-center list-unstyled mt-1">
              <li className="me-2">
                <div className="dropdown">
                  <a
                    href="#"
                    className="text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="far fa-user" /> Acount
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        <button className="text-light btn px-5 py-1 btn-warning">
                          SIGN IN
                        </button>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-user" />
                        My Acount
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-bags-shopping" /> Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="far fa-heart" /> Saved Items
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="me-2">
                <div className="dropdown">
                  <a
                    href="#"
                    className="text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="far fa-question-circle" /> Help
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Place &amp; Track Order
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Oreder Collection
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Return &amp; Refunds
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Payment &amp; Jumia Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <button className="text-light btn px-5 py-1 btn-warning">
                          <i className="far fa-comment-alt-dots" /> LIVE HELP
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="d-flex text-decoration-none  link-dark  fw-bolder socialIcon"
                >
                  <i className="fal fa-shopping-cart mt-1 me-2" />
                  <span>Cart</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
