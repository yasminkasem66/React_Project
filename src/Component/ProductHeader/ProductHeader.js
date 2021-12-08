import React from "react";

export default function ProductHeader(props) {
  const setSign = (sigin) => {
    localStorage.setItem("sigin", sigin);
  };
  return (
    <>
      <div className="d-flex justify-content-between mt-1 align-items-center ps-2">
        <h5>{props.cat}</h5>
        <p className="d-flex align-items-center">
          <h6 className="mt-3">Sort by:</h6>
          <div class="dropdown mt-2">
            <button
              class="btn btn-white dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Popularity
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Popularity
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Newest Arrivals
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={() => setSign("+")}>
                  Price: Low to High
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={() => setSign("-")}>
                  Price: High to Low
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Product Rating
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
    </>
  );
}
