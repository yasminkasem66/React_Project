import { axiosInstance } from "../../../network";
import { catConstants } from '../../types';

// localhost: 5000 / api / v1 / products/categories
// localhost: 5000 / api / v1 / products /ParentCategories
export const GetParentCategory = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/products/ParentCategories`);
        dispatch({
            type: catConstants.GET_PARENT_CATEGORY ,
            payload: response.data.categoriesparentEn,
        });
    } catch (err) {
        console.log(err);
    }
};

export const GetChildCategory = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get(`/products/categories`);
        console.log("responseGetChildCategoryGetChildCategory", response);
        dispatch({
            type: catConstants.GET_CHILD_CATEGORY,
            payload: response.data.categories,
        });
    } catch (err) {
        console.log(err);
    }
};