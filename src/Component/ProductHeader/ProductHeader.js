import React from "react";
import { useTranslation } from "react-i18next";

export default function ProductHeader(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="d-flex justify-content-between mt-1 align-items-center ps-2">
        <h5>{props.cat}</h5>
        <p className="d-flex align-items-center">
          <h6 className="mt-3">{t("Sortby")}:</h6>
          <div class="dropdown mt-2">
            <button
              class="btn btn-white dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {t("Popularity")}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => props.sortPrice()}
                >
                  {t("Popularity")}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  {t("NewestArrivals")}
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => props.sortPrice("+", "false")}
                >
                  {t("PriceLowtoHigh")}
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => props.sortPrice("-", "false")}
                >
                  {t("PriceHightoLow")}
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  {t("ProductRating")}
                </a>
              </li>
            </ul>
          </div>
        </p>
      </div>
    </>
  );
}
