import { GET_ALL_USERS } from "../types";



export const userReducer = (state = [], action) => {
    console.log("action", action);
    switch (action.type) {
        case GET_ALL_USERS:
            return [...action.payload];
      
        default:
            return state;
    }
};