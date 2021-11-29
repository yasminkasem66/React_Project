import React from 'react';
import { NavLink } from 'react-router-dom';
import "./CatList.scss"

export default function CatList() {
    return (
        <>

            
            {/* test */}
            <ul className="list-group border-0 ">
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-apple-alt" aria-hidden="true" />
                    <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                        Supermarket
                    </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-tshirt" />{" "}
                        <NavLink to="/products" className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Fashion
                        </NavLink>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-feather-alt" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Health &amp; Beauty
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-child" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Baby Products
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-home" aria-hidden="true" />
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Home &amp; Office
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-laptop" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Electronics
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-desktop" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Computing
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-dumbbell" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Sporting Goods
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-headset" />
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Gaming
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-car" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Automobile
                        </a>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-ellipsis-h" aria-hidden="true" />{" "}
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Other categories
                        </a>
                    </div>
                </li>
            </ul>
            {/* test */}
        </>
    )
}



//   <li className=" row list-group-item d-flex justify-content-center align-item-center align-items-start border-0  p-0">
//                     <i className="fas fa-apple-alt mt-2 ms-2  col-2" aria-hidden="true" />
//                         <a className=" col-8 nav-link text-dark mt-0 fs-6 fw-light" href="#">
//                             Supermarket
//                         </a>
//                 </li>
//                 <li className=" row list-group-item d-flex justify-content-center align-item-center align-items-start border-0  p-0">
//                     <i className="fas fa-apple-alt  mt-2 ms-2  col-2" aria-hidden="true" />
//                         <a className=" col-8 nav-link text-dark fs-6 fw-light" href="#">
//                             Supermarket
//                         </a>
//                 </li>
//                 <li className=" row list-group-item d-flex justify-content-center align-item-center align-items-start border-0  p-0">
//                     <i className="fas fa-apple-alt mt-2  ms-2  col-2" aria-hidden="true" />
//                         <a className=" col-8 nav-link text-dark fs-6 fw-light" href="#">
//                             Supermarket
//                         </a>
//                 </li>
