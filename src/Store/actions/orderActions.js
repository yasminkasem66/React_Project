import { axiosInstance } from "./../../network";
import { GET_ALL_ORDERS } from "../types";

export const getAllOrders = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/orders`);
    console.log("response", response);
    dispatch({
      type: GET_ALL_ORDERS,
      payload: response.data.orders,
    });
  } catch (err) {
    console.log(err);
  }
};
