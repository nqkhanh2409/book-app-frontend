import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openToast: (state, action) => {
      state.isOpen = true;
    },

    closeToast: (state, action) => {
      state.isOpen = false;
    },

    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
      if (!existingItem) {
        state.cartItems.push(action.payload);
        alert("Item added!");
      } else {
        alert("Item already exists!");
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// export the actions
export const { openToast, closeToast, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
