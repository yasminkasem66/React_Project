import { combineReducers } from "redux";
import {orderReducer, ordersReducer} from "./orderReducer";
import { userReducer } from "./userReducer";
import {
  AllProductsReducer,
  SingleProductReducer,
  AllProductsPaginationReducer,
} from "./GetAllProduct";
import { SignUpReducer } from "./authReducer";


export default combineReducers({
  AllProducts: AllProductsReducer,
  AllProductsPagination: AllProductsPaginationReducer,
  SingleProduct: SingleProductReducer,
  orders: ordersReducer,
  users: userReducer,
  SignUp: SignUpReducer, //auth
  Orders: orderReducer  //cart

});
