import { catConstants } from '../types';
const cat = ["smartPhones", "Gaming", "Fashion", "Furniture"];
const catchild = ["Men", "Women", "ios", "Androied"];

export const GetParentCategory = (state = cat, action) => {
    console.log("GetParentCategoryaction", action);
    switch (action.type) {
        case catConstants.GET_PARENT_CATEGORY:
            return [...action.payload];
        default:
            return state;
    }
};

export const GetChildCategory = (state = catchild, action) => {
    console.log("GetChildCategoryaction", action);
    console.log("action", action);
    switch (action.type) {
        case catConstants.GET_CHILD_CATEGORY:
            return [...action.payload];
        default:
            return state;
    }
};