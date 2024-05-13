import { TProduct } from "@/components/pageSections/Homepage/FlashSaleSection";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";
const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};
const toastId = toast.loading("User logging in.");

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      const isExist = state.products.find(
        (product: any) => product._id === action.payload._id
      );
      if (!isExist) {
        state.products.push({ ...action.payload });
        toast.success(`${action.payload.title} added successfully!`, {
          id: toastId,
          duration: 2000,
        });
      } else {
        toast.error(`${action.payload.title} is added already!`, {
          id: toastId,
          duration: 2000,
        });
      }
    },
    updateQuantity: (state: any, action) => {
      const products = state.products.map((product: TProduct) => {
        if (product._id === action.payload._id) {
          if (action.payload.type === "increment") {
            product.quantity += 1;
          } else if (action.payload.type === "decrement") {
            product.quantity -= 1;
          }
        }
        return product;
      });
    },
  },
});
export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
