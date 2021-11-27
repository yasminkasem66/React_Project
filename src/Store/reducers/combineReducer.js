import { combineReducers } from "redux";
import { productReducer, SingleProductReducer } from "./productReducer";
import { ordersReducer } from "./orderReducer";

export default combineReducers({
  products: productReducer,
  orders: ordersReducer,
});
