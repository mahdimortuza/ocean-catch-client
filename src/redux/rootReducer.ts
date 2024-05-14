import { baseApi } from "./api/baseApi";
import { persitedCartReducer } from "./store";

export const rootReducer = {
  cart: persitedCartReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
