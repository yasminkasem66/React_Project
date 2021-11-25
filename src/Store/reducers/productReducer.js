import { GET_ALL_PRODUCTS } from '../types';
import { GET_SINGLE_PRODUCT } from '../types';


export const productReducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return [...action.payload];
        case GET_SINGLE_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};

// export const SingleProductReducer = (state = {}, action) => {
//     console.log("action", action);
//     switch (action.type) {
//         case GET_SINGLE_PRODUCT:
//             return [action.payload];
//         default:
//             return state;
//     }
// };
