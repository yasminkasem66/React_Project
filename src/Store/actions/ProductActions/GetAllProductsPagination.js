import { axiosInstance } from "../../../network";
import { productConstants } from '../../types';


export const getAllProductsPaganation = (page,cat) => async (dispatch) => {
    console.log("pagesss", page);
    try {
        const response = await axiosInstance.get(`/products?page=${page}&limit=12&categoryparent=${cat}`);
        console.log("response", response);
        dispatch({
            type: productConstants.GET_ALL_PRODUCTS_PAGANATION,
            payload: response.data.products,
        });
    } catch (err) {
        console.log(err);
    }
};
