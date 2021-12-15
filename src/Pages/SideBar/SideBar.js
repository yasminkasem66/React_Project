import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { LinearProgress } from "@material-ui/core";

// export const AddProduct = React.lazy(() =>
//   import("../../Pages/AddProduct/AddProduct")
// );

import AddProduct from "../../Pages/AddProduct/AddProduct"
export default function SideBar() {
  return (
    <>
      <div className="bg-light py-5 px-2">
        <h3 className="text-center">Menu</h3>
        <ul className="d-flex flex-column list-unstyled p-2">
          <li className="my-3">
            <i className="far fa-user me-2" />
            Myaccount
          </li>
          <li className="my-3">
            <i class="far fa-list-alt me-2" />
            Product List
          </li>
          <li className="my-3">
            <Link to="/addproduct">
              <i class="far fa-cart-plus me-2" />
              Add Product
            </Link>
          </li>
          <li className="my-3">
            <i className="far fa-bags-shopping me-2" />
            Orders
          </li>
          <li className="my-3">
            <i className="far fa-user me-2" />
            Customers
          </li>
        </ul>
      </div>
    </>
  );
}



{/* 

import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LinearProgress } from "@material-ui/core";

// export const AddProduct = React.lazy(() =>
//   import("../../Pages/AddProduct/AddProduct")
// );

import AddProduct from "../../Pages/AddProduct/AddProduct"
export default function SideBar() {
  return (
    <>
      <div className="col-">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
              <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a
                  href="/"
                  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                >
                  <span className="fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul
                  className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                  id="menu"
                >
                  <li className="nav-item">
                    <a href="#" className="nav-link align-middle px-0">
                      <i className="fs-4 bi-house"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submenu1"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-speedometer2"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                    </a>
                    <ul
                      className="collapse show nav flex-column ms-1"
                      id="submenu1"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <Link to="/addproduct" className="nav-link px-0">
                          <span className="d-none d-sm-inline">
                            Add Product
                          </span>
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Item</span> 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-table"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Orders</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#submenu2"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle "
                    >
                      <i className="fs-4 bi-bootstrap"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu2"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Item</span>1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Item</span>2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="#submenu3"
                      data-bs-toggle="collapse"
                      className="nav-link px-0 align-middle"
                    >
                      <i className="fs-4 bi-grid"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Products</span>{" "}
                    </a>
                    <ul
                      className="collapse nav flex-column ms-1"
                      id="submenu3"
                      data-bs-parent="#menu"
                    >
                      <li className="w-100">
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link px-0">
                          {" "}
                          <span className="d-none d-sm-inline">Product</span>4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0 align-middle">
                      <i className="fs-4 bi-people"></i>{" "}
                      <span className="ms-1 d-none d-sm-inline">Customers</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a
                    href="#"
                    className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    id="dropdownUser1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt="hugenerd"
                      width="30"
                      height="30"
                      className="rounded-circle"
                    />
                    <span className="d-none d-sm-inline mx-1">loser</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col py-3">
              lllllllllllllllllllllllllllll
              {/* <Suspense fallback={<LinearProgress />}> */}
//               <Routes>
//                 <Route path="/addproduct" exact element={<AddProduct />} />
//               </Routes>
//               {/* </Suspense> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// } */}
