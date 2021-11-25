import { GET_ALL_PRODUCTS } from '../types';


export const productReducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }
};