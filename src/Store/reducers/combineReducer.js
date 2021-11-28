import { combineReducers } from "redux";
import { productReducer, SingleProductReducer } from "./productReducer";
import { ordersReducer } from "./orderReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  products: productReducer,
  orders: ordersReducer,
  users:userReducer
});
