import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cart/cartSlice";

export const reducer = {
  cart: cartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
