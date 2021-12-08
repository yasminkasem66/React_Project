import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import image from "../../assets/imgs/jumia-brand.webp";
export default function CartItem(props) {
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

  const handleQty = (e) => {
    updateItemQuantity(props.item.id, e.target.value);
  };

  const lang = localStorage.getItem('lang') || 'en';

  return (
    <>
<<<<<<< HEAD
      <div className="row mb-3 p-3">
        <div className="col-6 border-end">
          <div className="d-flex">
            <img
              style={{ width: "5rem", height: "5rem" }}
              src={props.item.image}
            />
            <div className="">
              <p>Seller: Bazicz</p>
              <Link to={"/singleProduct/" + props.item.id}>
                <p>{props.item.name}</p>
              </Link>
              <div className="d-flex">
                <span className="text-warning">
                  <i className="far fa-heart" /> MOVE TO SAVED ITEMS
                </span>
                <span
                  onClick={() => removeItem(props.item.id)}
                  className="ps-4 text-warning"
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-trash" /> REMOVE
                </span>
=======
      {
        (lang == 'en') ? <div className="row mb-3 p-3">
          <div className="col-6 border-end">
            <div className="d-flex">
              <img
                style={{ width: "5rem", height: "5rem" }}
                src={props.item.image}
              />
              <div className="">
                <p>Seller: Bazicz</p>
                <p>{props.item.name}</p>
                <div className="d-flex">
                  <span className="text-warning">
                    <i className="far fa-heart" /> MOVE TO SAVED ITEMS
                  </span>
                  <span
                    onClick={() => removeItem(props.item.id)}
                    className="ps-4 text-warning"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-trash" /> REMOVE
                  </span>
                </div>
>>>>>>> 9b2c577628a933d4a35adea42ea6783dbf9101b3
              </div>
            </div>
          </div>
          <div className="col-2 border-end mt-2">
            <select className="form-select w-100">
              <option onChange={handleQty} value={props.item.quantity}>
                {props.item.quantity}
              </option>
              <option onChange={handleQty} value={1}>
                1
              </option>
              <option onChange={handleQty} value={2}>
                2
              </option>
              <option onChange={handleQty} value={3}>
                3
              </option>
              <option onChange={handleQty} value={4}>
                4
              </option>
            </select>
          </div>
          <div className="col-2 border-end mt-2">EGP {props.item.price}</div>
          <div className="col-2 text-warning mt-2">
            {props.item.price * props.item.quantity}
          </div>
        </div> : <div className="row mb-3 p-3">
          <div className="col-6 border-end">
            <div className="d-flex">
              <img
                style={{ width: "5rem", height: "5rem" }}
                src={props.item.image}
              />
              <div className="">
                <p>Seller: Bazicz</p>
                <p>{props.item.name}</p>
                <div className="d-flex">
                  <span className="text-warning">
                    <i className="far fa-heart" /> العناصر المحفوظه
                  </span>
                  <span
                    onClick={() => removeItem(props.item.id)}
                    className="ps-4 text-warning"
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-trash" />احذف 
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 border-end mt-2">
            <select className="form-select w-100">
              <option onChange={handleQty} value={props.item.quantity}>
                {props.item.quantity}
              </option>
              <option onChange={handleQty} value={1}>
               1
              </option>
              <option onChange={handleQty} value={2}>
                2
              </option>
              <option onChange={handleQty} value={3}>
                3
              </option>
              <option onChange={handleQty} value={4}>
                4
              </option>
            </select>
          </div>
          <div className="col-2 border-end mt-2"> {props.item.price}جنيه</div>
          <div className="col-2 text-warning mt-2">
            {props.item.price * props.item.quantity}
          </div>
        </div>
<<<<<<< HEAD
        <div className="col-2 border-end mt-2">
          <select
            onChange={handleQty}
            value={props.item.quantity}
            className="form-select w-100 border-top-0 border-end-0 border-start-0"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div className="col-2 border-end mt-2">EGP {props.item.price}</div>
        <div className="col-2 text-warning mt-2">
          {props.item.price * props.item.quantity}
        </div>
      </div>
=======
}
>>>>>>> 9b2c577628a933d4a35adea42ea6783dbf9101b3
    </>
  );
}
