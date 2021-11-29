import { axiosInstance } from "../../../network";
import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_ALL_PRODUCTS_PAGANATION,
} from "../../types";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axiosInstance.get(`/products`);
    console.log("response", response);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getAllProductsPaganation = (page) => async (dispatch) => {
  console.log("pagesss", page);
  try {
    const response = await axiosInstance.get(`/products?page=${page}&limit=12`);
    console.log("response", response);
    dispatch({
      type: GET_ALL_PRODUCTS_PAGANATION,
      payload: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};

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
