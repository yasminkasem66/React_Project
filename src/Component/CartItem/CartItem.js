import React from "react";
import image from "../../assets/imgs/jumia-brand.webp";
export default function CartItem(pops) {
  return (
    <>
      <div className="row mb-3 p-3">
        <div className="col-6 border-end">
          <div className="d-flex">
            <img style={{ width: "5rem", height: "5rem" }} src={image} />
            <div className="">
              <p>Seller: Bazicz</p>
              <p>sakcjsladx xkmkcnslz kajcksaanz</p>
              <div className="d-flex">
                <span className="text-warning">
                  <i className="far fa-heart" /> MOVE TO SAVED ITEMS
                </span>
                <span className="ps-4 text-warning">
                  <i className="fas fa-trash" /> REMOVE
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 border-end mt-2">
          <select className="form-select w-100">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className="col-2 border-end mt-2">EGP 500</div>
        <div className="col-2 text-warning mt-2">EGP 500</div>
      </div>
    </>
  );
}
