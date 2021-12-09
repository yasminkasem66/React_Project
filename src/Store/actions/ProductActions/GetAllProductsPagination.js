import { axiosInstance } from "../../../network";
import { productConstants } from "../../types";

export const getAllProductsPaganation =
  (page, catparent, cat) => async (dispatch) => {
    const lang = localStorage.getItem("lang") || "en";
    console.log("langProductByIdProductById", lang);
    let response;
    try {
      //     if (cat != 'null') {

      //          response = await axiosInstance.get(`/products?page=${page}&limit=12&categoryparent=${cat}`);
      //     }
      //    else{
      response = await axiosInstance.get(
        `/products/${lang}?page=${page}&limit=8&categoryparentEn=${catparent}&categoryEn=${cat}`
      );
      // }
      // console.log("response", response);
      dispatch({
        type: productConstants.GET_ALL_PRODUCTS_PAGANATION,
        payload: response.data.products,
      });
    } catch (err) {
      console.log(err);
    }
  };

export const sortPrice = (catparent, sign) => async (dispatch) => {
  let response;
  try {
    // &featured=${featured }
    response = await axiosInstance.get(
      `/products?categoryparent=${catparent}&sort=${sign}price`
    );
    // console.log("response", response);
    dispatch({
      type: productConstants.GET_HightoLowPrice_PRODUCTS,
      payload: response.data.products,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const Feautredproducts = (cat, sign) => async (dispatch) => {
//     let response;
//     try {
//         response = await axiosInstance.get(`/products?categoryparent=${cat}&sort=${sign}price`);
//         console.log("response", response);
//         dispatch({
//             type: productConstants.GET_HightoLowPrice_PRODUCTS,
//             payload: response.data.products,
//         });
//     } catch (err) {
//         console.log(err);
//     }
// };
