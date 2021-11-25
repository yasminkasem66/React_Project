import React from "react";
import './AddressDetails.scss'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
export default function AddressDetails() {
  return (
    <div>
      <h6>CHECKOUT</h6>
      <div className="card">
        <div className="card-header bg-white"><CheckCircleRoundedIcon color="success"/>1. ADDRESS DETAILS
        
  {/* Button trigger modal */}
  <button
    type="button"
    className="btn chngbtn mx-5"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
   CHANGE
  </button>
  {/* Modal */}
  <div
    className="modal fade  "
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
          Address Book
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
        <div className="modal-dialog modal-dialog-scrollable">...</div>


          <hr/>
          <div>
            <p>DEFAULT ADDRESS</p>
            <h5 className="card-title ">mohamed hamdy</h5>
          <p className="card-text ">
          qena, Qena, Qena <br/>
          +201152558538
          </p>
          </div>
        </div>
        <div className="modal-footer">
          
          <button type="button" className="btn btn-primary">
          USE THIS ADDRESS
          </button>
        </div>
      </div>
    </div>
  </div>


        </div>
        <div className="card-body">
          <h6 className="card-title px-3 fw-bolder ">mohamed hamdy</h6>
          <p className="card-text px-3 ">
          qena, Qena, Qena <br/>
          +201152558538
          </p>
        </div>
      </div>
    </div>
  );
}
