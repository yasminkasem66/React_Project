import { catConstants } from '../types';
const cat =["smartPhones", "Gaming", "Fashion"]
export const GetParentCategory = (state = cat, action) => {
    console.log("GetParentCategoryaction", action);

    console.log("action", action);
    switch (action.type) {
        case catConstants.GET_PARENT_CATEGORY:
            return [...action.payload];
        default:
            return state;
    }
};