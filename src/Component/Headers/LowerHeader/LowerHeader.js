import React from "react";
import Badge from "@material-ui/core/Badge";
// import LinearProgress from "@material-ui/core/LinearProgress";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import {
  getAllOrders,
  getCartItems,
} from "../../../Store/actions/OrdrActions/orderActions";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import "./LowerHeader.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../../Store/actions/authen/authen";

import { useCart } from "react-use-cart";

export default function LowerHeader() {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    var element = document.getElementById("navBarFixed");
    var height = window.scrollY;
    if (height >= 111) {
      element.style.position = "sticky";
      element.style.top = 0;
      element.style.left = 0;
      element.style.width = "100%";
    }
  };

  // check if logged in
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
    navigate("/");
  };

  const token = localStorage.getItem("token");
  // add to cart

  const orders = useSelector((state) => state.Orders);
  const dispatch2 = useDispatch();
  useEffect(() => {
    dispatch2(getCartItems());
  }, []);
  console.log("all orders from cart", orders);

  return (
    <>
      <header
        className="pb-1 pt-2 mb-4 border-bottom  header-underNav"
        id="navBarFixed"
        style={{
          backgroundColor: "white",
          top: "5rem",
          left: 0,
          zIndex: "1030",
        }}
      >
        <div className="row container d-flex justify-content-around m-auto align-items-center  ">
          <div className="col-lg-2 col-md-12">
            <NavLink
              className="d-flex text-decoration-none  link-dark me-4 socialIcon"
              to="/"
            >
              <h2
                className="fw-bold mt-3"
                style={{ fontFamily: '"Orbitron", sans-serif' }}
              >
                JUMIA
              </h2>
              <i style={{ fontSize: 25 }} className="mt-4 fas fa-cart-plus" />
            </NavLink>
          </div>
          {/* Search Part */}
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
                    className="hoverAnchor text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
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
                      {!token && (
                        <Link className="dropdown-item" to="/login">
                          <button className="text-light btn px-5 py-1 btn-warning">
                            SIGN IN
                          </button>
                        </Link>
                      )}
                    </li>
                    <li>
                      {token ? (
                        <Link className="dropdown-item" to="/Myaccount">
                          <i className="far fa-user" />
                          My Acount
                        </Link>
                      ) : (
                        <Link className="dropdown-item" to="/login">
                          <i className="far fa-user" />
                          My Acount
                        </Link>
                      )}
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
                    <li>
                      {token && (
                        <Link className="dropdown-item" to="/">
                          <span
                            onClick={logout}
                            className=" btn px-5 py-1 fs-5 text-warning"
                          >
                            Log out
                          </span>
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </li>
              <li className="me-2">
                <div className="dropdown">
                  <a
                    href="#"
                    className="hoverAnchor text-decoration-none  link-dark me-4 dropdown-toggle fw-bold socialIcon"
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
                <Link
                  to="/cart"
                  className="hoverAnchor d-flex text-decoration-none  link-dark  fw-bolder socialIcon"
                >
                  <i className="fal fa-shopping-cart mt-1 me-2" />
                  <span class="position-relative">Cart</span>

                  <span class="position-absolute top-70 start-86 translate-middle badge rounded-pill bg-danger">
                    {totalUniqueItems}
                    <span class="visually-hidden">unread messages</span>
                  </span>

                  {/* <Badge count=> */}
                  {/* <Badge  count={2}>
                      <AddShoppingCartIcon />
                    </Badge> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
