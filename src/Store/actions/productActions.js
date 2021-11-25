import { axiosInstance } from "./../../network";
import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCT } from '../types';


export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/products`);
        console.log("response", response);
        dispatch({
            type: GET_ALL_PRODUCTS ,
            payload: response.data.products,
        });
    } catch (err) {
        console.log(err);
    }
};

export const ProductById = (id) => async (dispatch) => {
    try {
        const response2 = await axiosInstance.get(`/products/${id}`);
        console.log("response2", response2);
        dispatch({
            type: GET_SINGLE_PRODUCT ,
            payload: response2.data.product,
        });
    } catch (err) {
        console.log(err);
    }
};