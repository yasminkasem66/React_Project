import { GET_SINGLE_PRODUCT } from '../types';
import { GET_ALL_PRODUCTS_PAGANATION } from '../types';
import { GET_ALL_PRODUCTS } from '../types';

export const AllProductsReducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return [...action.payload];
        default:
            return state;
    }
};

export const AllProductsPaginationReducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case GET_ALL_PRODUCTS_PAGANATION:
            return [...action.payload];
        default:
            return state;
    }
};



export const SingleProductReducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case GET_SINGLE_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};




