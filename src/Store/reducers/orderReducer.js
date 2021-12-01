import { GET_ALL_ORDERS } from "../types";

export const ordersReducer = (state = [], action) => {
  console.log("action", action);
  switch (action.type) {
    case GET_ALL_ORDERS:
      return [...action.payload];
    default:
      return state;
  }
};


