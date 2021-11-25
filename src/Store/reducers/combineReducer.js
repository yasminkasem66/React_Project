import { combineReducers } from "redux";
import { productReducer, SingleProductReducer } from './productReducer';



export default combineReducers({
    products: productReducer,
});
