import React from 'react'

export default function DeliveryReturns(props) {
    return (
        <>
        
  {/* 1st row in 3 colms */}
  <div
    style={{
      backgroundColor: "white",
      padding: 8,
      boxShadow: "0 2px 5px 0 #ededed",
      borderRadius: 4
    }}
  >
    <div style={{ fontSize: 14, fontWeight: 500, margin: 0, paddingTop: 5 }}>
      DELIVERY &amp; RETURNS
    </div>
    <hr />
    <div style={{ margin: 0 }}>
      Jumia <span style={{ color: "#f68b1e" }}>Express</span>{" "}
    </div>
    <p style={{ fontSize: 12, margin: 0 }}>
      Free Shipping on Jumia Express for orders above 350 EGP in Cairo &amp;
      Giza. <a href>Details</a>{" "}
    </p>
    <hr />
    <h5 style={{ margin: 1 }}>Choose Your Location</h5>
    <select
      className="col-12"
      name="cars"
      style={{
        height: "2rem",
        marginBottom: 3,
        borderRadius: 4,
        border: "rgb(218, 212, 212) 1px solid"
      }}
      id="cars"
    >
      <option>Giza</option>
      <option>Alexandria</option>
      <option>Qena</option>
      <option>Menofia</option>
    </select>
    <br />
    <select
      className="col-12"
      name="cars"
      style={{
        height: "2rem",
        marginTop: 3,
        marginBottom: 10,
        borderRadius: 4,
        border: "rgb(218, 212, 212) 1px solid"
      }}
      id="cars"
    >
      <option>option 1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
    <div className="row">
      <div className="col-2">
        <div
          style={{
            border: "1px solid rgb(212, 207, 207)",
            borderRadius: 3,
            width: "2.5rem",
            height: "2.5rem"
          }}
        >
          <i className="far fa-truck" style={{ fontSize: 20, padding: 8 }} />
        </div>
      </div>
      <div className="col-10">
        <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 0 }}>
          Door Delivery
        </p>
        <div style={{ fontSize: 12 }}>
          Shipping <b>EGP 22</b>
          Delivery by 18 October when you order within next 12hrs 2mins
        </div>
      </div>
    </div>
    <hr width="100%" />
    <div className="row">
      <div className="col-2">
        <div
          style={{
            border: "1px solid rgb(212, 207, 207)",
            borderRadius: 3,
            width: "2.5rem",
            height: "2.5rem"
          }}
        >
          <i className="fas fa-undo-alt" style={{ fontSize: 20, padding: 8 }} />
        </div>
      </div>
      <div className="col-10">
        <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 0 }}>
          Return Policy
        </p>
        <div style={{ fontSize: 12 }}>
          Shipping <b>EGP 22</b>
          Delivery by 18 October when you order within next 12hrs 2mins
        </div>
      </div>
    </div>
    {/* end of 1st row 3 colms */}
  </div>
  {/* start of 2nd row 3  colms */}
  <div
    className="mt-2 "
    style={{
      backgroundColor: "white",
      padding: 5,
      boxShadow: "0 2px 5px 0 #ededed",
      borderRadius: 4
    }}
  >
    <a href className="text-dark " style={{ textDecoration: "none" }}>
      <h6>SELLER INFORMATION</h6>{" "}
    </a>
    <hr className="m-0" />
    <div style={{ marginTop: 0 }}>OnLine PHaRMaCIES </div>
    <div className="row">
      <div className="col-6">
        <span style={{ fontSize: 13 }}>
          {" "}
          <b>94%</b> Seller Score <br />
        </span>
        <span style={{ fontSize: 13 }}>
          <b>1473 </b> Followers
        </span>
      </div>
      <div className="col-6 text-end">
        <button
          style={{
            backgroundColor: "#f68b1e",
            color: "white",
            border: 0,
            borderRadius: 4,
            padding: "3px 15px 3px 15px",
            marginRight: 10
          }}
        >
          Follow
        </button>
      </div>
    </div>
    <hr className="mb-2" />
    <div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 0 }}>
        {" "}
        Seller performance
      </p>
    </div>
    <i className="bi bi-star" style={{ color: "green" }} />{" "}
    <span style={{ fontSize: 12 }}>
      Order Fulfillment Rate: <b>Excellent</b>{" "}
    </span>
    <br />
    <i className="bi bi-star" style={{ color: "green" }} />{" "}
    <span style={{ fontSize: 12 }}>
      Quality Score: <b>Excellent</b>{" "}
    </span>
    <br />
    <i className="bi bi-star" style={{ color: "green" }} />
    <span style={{ fontSize: 12 }}>
      Customer Rating: <b>Good</b>{" "}
    </span>
    <br />
  </div>
  {/* end of 2nd row 3 colms */}
  {/* start of 3rd row 3 colms */}
  <div
    className="mt-2 "
    style={{
      backgroundColor: "white",
      padding: 5,
      boxShadow: "0 2px 5px 0 #ededed",
      borderRadius: 4
    }}
  >
    <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 0 }}>
      {" "}
      Have one to sell?
    </p>
    <p style={{ fontSize: 13, marginBottom: 0 }}>
      Click here to list your product
    </p>
  </div>
  {/* end of 3rd row 3 colms */}



        </>
    )
}
