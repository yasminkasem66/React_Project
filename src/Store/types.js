export const GET_ALL_ORDERS = "GET_ALL_ORDERS ";
export const GET_ALL_MYORDERS = "GET_ALL_MYORDERS ";
export const GET_ALL_USERS = "GET_ALL_USERS ";
export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const UPDATE_USER_PASSWORD = "UPDATE_USER_PASSWORD";
export const CREATE_ORDER_REVIEW = "CREATE_ORDER_REVIEW ";
export const GET_SINGLE_PRODUCT_REVIEW = "GET_SINGLE_PRODUCT_REVIEW ";
export const CREATE_ORDER_ACTION = "CREATE_ORDER_ACTION";
export const UPDATE_ORDER_REVIEW = "UPDATE_ORDER_REVIEW";
export const DELET_ORDER_REVIEW = "DELET_ORDER_REVIEW";
// export const  GET_ALL_ORDERS = " GET_ALL_ORDERS";

export const productConstants = {
  GET_ALL_PRODUCTS: "GET_ALL_PRODUCTS ",
  GET_ALL_PRODUCTS_PAGANATION: "GET_ALL_PRODUCTS_PAGANATION ",
  GET_SINGLE_PRODUCT: "GET_SINGLE_PRODUCT ",
  GET_HightoLowPrice_PRODUCTS: "GET_HightoLowPrice_PRODUCTS",
  ADD_PRODUCT: "ADD_PRODUCT",
};

export const catConstants = {
  GET_CHILD_CATEGORY: "GET_CHILD_CATEGORY ",
  GET_PARENT_CATEGORY: "GET_PARENT_CATEGORY ",
};

export const authConstants = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAILURE: "LOGOUT_FAILURE",
  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_FAILURE: "SIGNUP_FAILURE",
};

export const cartConstants = {
  ADD_TO_CART_REQUEST: "ADD_TO_CART_REQUEST",
  ADD_TO_CART_SUCCESS: "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_FAILURE: "ADD_TO_CART_FAILURE",
  RESET_CART: "RESET_CART",
  REMOVE_CART_ITEM_REQUEST: "REMOVE_CART_ITEM_REQUEST",
  REMOVE_CART_ITEM_SUCCESS: "REMOVE_CART_ITEM_SUCCESS",
  REMOVE_CART_ITEM_FAILURE: "REMOVE_CART_ITEM_FAILURE",
};
