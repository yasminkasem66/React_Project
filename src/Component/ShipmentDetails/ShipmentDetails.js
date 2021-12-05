import React from 'react'


export default function ShipmentDetails(props) {
    
    return (
        <>
             <div className="card-body">
            <p className="card-title fw-bolder DeliveredDes " >
            Shipment {props.index} 
            </p>
            <p className="card-text DeliveredDes">
            {props.item.quantity}x  {props.item.name}
            </p>
            <p className="DeliveredDes">Delivered between <span className="delevaryDays">Sunday 5 Dec</span>  and<span  className="delevaryDays">Thursday 9 Dec</span> </p>

          </div>
            
        </>
    )
}
