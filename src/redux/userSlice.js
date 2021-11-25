import { db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
const initial = {
  id: null,
  email: null,
  name: null,
  phoneNumber: null,
  address: null,
  gender: null,
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (params, thunkAPI) => {
    const id = params;
    const docRef = doc(db, `user/${id}`);
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data();
    } else {
      return null;
    }
  }
);
export const updateUser = createAsyncThunk("user/sendUserData", (params) => {
  const user = params;
  const oldUser = doc(db, `user/${user.id}`);
  setDoc(oldUser, user, { merge: true });
  return user;
});

const userSlice = createSlice({
  name: "user",
  initialState: initial,
  reducers: {},
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.gender = action.payload.gender;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.gender = action.payload.gender;
    },
  },
});
const { reducer: userReducer } = userSlice;
export default userReducer;
