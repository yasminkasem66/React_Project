import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePrReview } from "../../Store/actions/Review/ReviewAction";
import SeeAll from "../SeeAll/SeeAll";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

//images for Rate

import r1 from "../../assets/imgs/Rate1.PNG";
import r2 from "../../assets/imgs/Rate2.PNG";
import r3 from "../../assets/imgs/Rate3.PNG";
import r4 from "../../assets/imgs/Rate4.PNG";
import r5 from "../../assets/imgs/Rate5.PNG";
import { getSingleUser } from "../../Store/actions/UserActions/getSingleUser";
import { getAllUsers } from "../../Store/actions/UserActions/userActions";

export default function ShowReview(props) {
  const Reviews = useSelector((state) => state.review);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSinglePrReview(props.id));
    dispatch(getAllUsers());
  }, []);

  console.log("Reviews Reviews rrrrrrrrrr", Reviews);
  console.log("Get all Users", users);

  // const getUserFun = (user_ID) => {
  //   dispatch(getSingleUser(user_ID));
  // };
  // console.log("current user ", user);
  return (
    <>
      <SeeAll className="border-bottom " title={"Verified Customer Feedback"} />
      <hr />
      <div className="row">
        <div className="col-4 text-center">
          <div className="mb-3 fw-bold">{120} VERIFIED PRODUCT RATINGS</div>
          <div state={{ width: "90%" }} className="mx-auto bg-light">
            <div className="mb-2">{props.averageRating}/5</div>
            {props.averageRating === 1 ? (
              <img className="mb-2" src={r1} />
            ) : props.averageRating === 2 ? (
              <img className="mb-2" src={r2} />
            ) : props.averageRating === 3 ? (
              <img className="mb-2" src={r3} />
            ) : props.averageRating === 4 ? (
              <img className="mb-2" src={r4} />
            ) : props.averageRating === 5 ? (
              <img className="mb-2" src={r5} />
            ) : (
              ""
            )}
            <div className="mb-3">{120} Verified product ratings</div>
          </div>
        </div>
        <div className="col-8">
          <div className="mb-3">Product Reviews ({Reviews.length})</div>
          {Reviews.map((item, index) => {
            return (
              <div className="mb-4 border-bottom">
                {/* <div>Review Rating : {item.rating}</div> */}
                {item.rating === 1 ? (
                  <img src={r1} />
                ) : item.rating === 2 ? (
                  <img src={r2} />
                ) : item.rating === 3 ? (
                  <img src={r3} />
                ) : item.rating === 4 ? (
                  <img src={r4} />
                ) : item.rating === 5 ? (
                  <img src={r5} />
                ) : (
                  ""
                )}
                <div className="fw-bold mb-3">{item.title}</div>
                <div className="mb-3">{item.comment}</div>
                <div className="d-flex justify-content-between">
                  <div className="text-muted">
                    created at {item.updatedAt.substring(0, 10)}
                  </div>
                  <div style={{ color: "#ffe086" }}>
                    <CheckCircleRoundedIcon />
                    Verified Purchase
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
