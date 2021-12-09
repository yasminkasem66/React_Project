import { axiosInstance } from "../../../network";
import store from "../../Store";
import { CREATE_ORDER_REVIEW } from "../../types";
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
