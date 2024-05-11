import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      state.products.push({ ...action.payload });
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
