import React from 'react';
import "./CatList.scss"

export default function CatList() {
    return (
        <>

            
            {/* test */}
            <ul className="list-group border-0 ">
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-apple-alt" aria-hidden="true" />
                    <span >
                        <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Supermarket
                        </a>
                    </span>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-tshirt" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Fashion
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-feather-alt" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Health &amp; Beauty
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-child" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light" href="#">
                            Baby Products
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-home" aria-hidden="true" />
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Home &amp; Office
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-laptop" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Electronics
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-desktop" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Computing
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-dumbbell" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Sporting Goods
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-headset" />
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Gaming
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-car" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Automobile
                        </a>
                     </span> </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start border-0  p-0">
                    <div className="ms-2 me-auto">
                        <i className="fas fa-ellipsis-h" aria-hidden="true" />{" "}
                        <span > <a className="nav-link text-dark d-inline-block fs-6 fw-light " href="#">
                            Other categories
                        </a>
                     </span> </div>
                </li>
            </ul>
            {/* test */}
        </>
    )
}
