import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Cart {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

interface InitialState {
  carts: Cart[];
}
const initialState: InitialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Cart>) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity++;
        state.carts[itemIndex].price *= state.carts[itemIndex].quantity;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseItem: (state, action: PayloadAction<number>) => {
      const item = state.carts.find((cart) => cart.id === action.payload);
      if (item) {
        item.quantity++;
        item.price *= item.quantity;
      }
    },
    decreaseItem: (state, action: PayloadAction<number>) => {
      const itemIndex = state.carts.findIndex((item) => item.id === action.payload);
      if (state.carts[itemIndex].quantity === 1) {
        state.carts.splice(itemIndex, 1);
      } else {
        state.carts[itemIndex].quantity--;
        state.carts[itemIndex].price /= state.carts[itemIndex].quantity + 1;
      }
    },
    removeAllItem: (state) => {
      state.carts = [];
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
  },
});
export const { addItem, decreaseItem, increaseItem, removeAllItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
