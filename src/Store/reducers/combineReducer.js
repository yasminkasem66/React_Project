import { combineReducers } from "redux";
import { ordersReducer } from "./orderReducer";
import { userReducer } from "./userReducer";
import { AllProductsReducer, SingleProductReducer, AllProductsPaginationReducer } from "./GetAllProduct";

export default combineReducers({
  AllProducts: AllProductsReducer,
  AllProductsPagination: AllProductsPaginationReducer,
  SingleProduct: SingleProductReducer,
  orders: ordersReducer,
  users:userReducer
});
