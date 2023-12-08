import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMobileData = createAsyncThunk(
  "mobile/getMobileData",
  async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products/?limit=10");
      //   if (!response.ok) {
      //       throw new Error("Server error");
      //     }
      console.log(response.data.products);
      return response.data.products;
    } catch (error) {
  return error.message
    }
  }
);

const initialState = {
  mobiles: [],
  status: null,
  error: null,
};
export const mobileStoreSlice = createSlice({
  name: "mobileStore",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMobileData.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.mobiles = payload;
        
      })
      .addCase(getMobileData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getMobileData.rejected, (state,{payload}) => {
        state.status = "rejected";
        state.error = payload;
      });
  },
});
