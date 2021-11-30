import { cartItemReducer } from "./CartItemReducer";

export const CartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, cartItemReducer(undefined, action)];
    case "REMOVE_FROM_CART":
      return state.filter((item) => cartItemReducer(item, action));
    case "UPDATE_CART_ITEM":
      return state.map((item) => cartItemReducer(item, action));
    default:
      return state;
  }
};
