import React from "react";
import { Link } from "react-router-dom";
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
