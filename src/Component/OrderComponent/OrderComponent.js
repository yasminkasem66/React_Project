import { Link } from '@material-ui/core'
import React from 'react'

export default function OrderComponent(props) {
    return (
        <>
              <div className="col-md-12 ">
  <div className="card">
    <div className="card-body row">
        <div className="col-2">
            {props.image}
        </div>
        <div className="col-8">
          {props.name}
        </div>
        <Link className="col-2">
        <div className="" style={{ color: "#f68b1e", fontWeight: 500 }}>
            See Details
          </div>

        </Link>
        
      
     
      
    </div>
  </div>
</div>
            
        </>
    )
}
