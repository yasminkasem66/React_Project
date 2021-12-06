import { axiosInstance } from "../../../network";
import { catConstants } from '../../types';

// localhost: 5000 / api / v1 / products/categories
// localhost: 5000 / api / v1 / products /ParentCategories
export const GetParentCategory = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/products/ParentCategories`);
        console.log("response", response);

        dispatch({
            type: catConstants.GET_PARENT_CATEGORY ,
            payload: response.data.categoriesparent,
        });
    } catch (err) {
        console.log(err);
    }
};