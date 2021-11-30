import { combineReducers } from "redux";
import {
  ordersReducer,
  CartReducer,
} from "./orderReducer";
import { userReducer } from "./userReducer";
import {
  AllProductsReducer,
  SingleProductReducer,
  AllProductsPaginationReducer,
  StuckItemReducer,
  StuckReducer,
} from "./GetAllProduct";

export default combineReducers({
  AllProducts: AllProductsReducer,
  AllProductsPagination: AllProductsPaginationReducer,
  SingleProduct: SingleProductReducer,
  orders: ordersReducer,
  users: userReducer,
  cart: CartReducer,
  stuck: StuckReducer,
});
