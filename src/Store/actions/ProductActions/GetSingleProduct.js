import { axiosInstance } from "../../../network";
import {GET_SINGLE_PRODUCT
} from "../../types";



export const ProductById = (id) => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    console.log("response", response);
    dispatch({
      type: GET_SINGLE_PRODUCT,
      payload: response.data.product,
    });
  } catch (err) {
    console.log(err);
  }
};
