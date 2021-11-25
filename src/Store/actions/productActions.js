import { axiosInstance } from "./../../network";
import { GET_ALL_PRODUCTS } from '../types';


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