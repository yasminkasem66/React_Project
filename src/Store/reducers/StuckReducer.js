import { StuckItemReducer } from "./StuckItemReducer";

export const StuckReducer = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_STOCK_ITEM":
      return state.map((item) => StuckItemReducer(item, action));
    default:
      return state;
  }
};
