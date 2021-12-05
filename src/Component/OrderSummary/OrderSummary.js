import React from 'react'

export default function OrderSummary(props) {
    return (
        <>
             <div className=" card-body container">
                    <div className=" card-text row">
                        <div className="col-4">
                            
                            <img src={props.item.image} alt="" className="img-fluid" />
                            
                            
                        </div>
                        <div className=" col-8">
                            <p className="fw-normal">{props.item.name}</p>
                            <p className="fw-normal price">EGP {props.item.price*props.item.quantity}</p>
                            <p className="fw-normal">Qty: {props.item.quantity}</p>
                        </div>
                    </div>
             </div>
            
        </>
    )
}
