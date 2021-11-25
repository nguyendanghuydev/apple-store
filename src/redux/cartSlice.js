import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initial = {
  id: null,
  items: [],
  totalQuantity: 0,
};

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (params, thunkAPI) => {
    const id = params;
    const docRef = doc(db, `cart/${id}`);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data();
    } else {
      return null;
    }
  }
);
export const sendCartData = createAsyncThunk("cart/sendCartData", (params) => {
  const { userId, cart } = params;
  const oldCart = doc(db, `cart/${userId}`);
  setDoc(oldCart, cart, { merge: true });
  return cart;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: Number(newItem.price),
          quantity: 1,
          totalPrice: Number(newItem.price),
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += Number(newItem.price);
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= Number(existingItem.price);
      }
    },
  },
  extraReducers: {
    [getCart.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    [sendCartData.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});
const { reducer: cartReducer } = cartSlice;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartReducer;
