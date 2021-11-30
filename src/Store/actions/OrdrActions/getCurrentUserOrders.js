import { axiosInstance } from "../../../network";
import { GET_ALL_ORDERS } from "../../types";

// export const getCurrentUserOrders = () => async (dispatch) => {
//   try {
//     const response = await axiosInstance.get(`/getCurrentUserOrders`);
//     const { orderItems } = response.data.orders;
//     console.log("response", response);
//     dispatch({
//       type: GET_ALL_ORDERS,
//       payload: orderItems,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

