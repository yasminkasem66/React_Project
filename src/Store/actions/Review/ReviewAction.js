import { axiosInstance } from "../../../network";
import store from "../../Store";
import { CREATE_ORDER_REVIEW } from "../../types";
import { GET_SINGLE_PRODUCT_REVIEW } from "../../types";
export const createReview = (reviewbody) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/reviews`, reviewbody);
    console.log("response", res);
    dispatch({
      type: CREATE_ORDER_REVIEW,
      payload: res.data.review,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getSinglePrReview = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(
      `reviews/getSingleProductReviews/${id}`
    );
    console.log("response", res);
    dispatch({
      type: GET_SINGLE_PRODUCT_REVIEW,
      payload: res.data.reviews,
    });
  } catch (err) {
    console.log(err);
  }
};
