import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePrReview } from "../../Store/actions/Review/ReviewAction";
import SeeAll from "../SeeAll/SeeAll";

export default function ShowReview(props) {
  const Reviews = useSelector((state) => state.review);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSinglePrReview(props.id));
  }, []);
  console.log("Reviews Reviews rrrrrrrrrr", Reviews);
  return (
    <>
      <SeeAll className="border-bottom" title={"Verified Customer Feedback"} />
      <hr />
      <div className="row">
        <div className="col-4">Average Rating</div>
        <div className="col-8">
          <div>Product Reviews</div>
          {Reviews.map((item, index) => {
            return (
              <>
                <div>Review title : {item.title}</div>
                <div>Review Comment : {item.comment}</div>
                <div>Review Rating : {item.rating}</div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
