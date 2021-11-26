import React from 'react'
import './CheckOrder.scss'
export default function CheckoutOrder() {
    return (
        <div>
            <h6>ORDER SUMMARY</h6>
            <div className="card ps-2">
                <p   className=" card-header bg-white">YOUR ORDER<span>(1 item)</span></p>
                <div className=" card-body container">
                    <div className=" card-text row">
                        <div className="col-4">
                            <img src="" alt="" />
                        </div>
                        <div className=" col-8">
                            <p>Shipping amount</p>
                            <p>EGP 140</p>
                            <p>Qty: 1</p>
                        </div>
                    </div>
                </div><hr/>
                <div className="ps-1">
                <p>Subtotal</p>
                <p>Shipping amount</p>
                </div><hr/>
                <div className="fw-bolder">Total</div>
                <hr/>
                <button  className="text-center  btn  p-2 fw-bolder modfybtn ">MODIFY CART</button>
            </div>
        </div>
    )
}
