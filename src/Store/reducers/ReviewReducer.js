import { CREATE_ORDER_REVIEW } from "../types";

export const reviewReducer = (state = [], action) => {
  // console.log("action", action);
  switch (action.type) {
    case CREATE_ORDER_REVIEW:
      return [...action.payload];
    // case CREATE_ORDER_ACTION:
    //   return [...action.payload];
    // case GET_ALL_MYORDERS:
    //   return [...action.payload];
    default:
      return state;
  }
};
