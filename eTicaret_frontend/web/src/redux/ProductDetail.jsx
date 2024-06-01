import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";

const initialState = {
  productDetail: {},
  productDetailStatus: STATUS.IDLE,
};

export const getDetailProduct = createAsyncThunk('getDetailProduct', async (id) => {
  const response = await fetch(`http://localhost:8080/products/${id}`);
  const data = await response.json();
  return data;
});

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailProduct.pending, (state, action) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = STATUS.SUCCESS;
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.productDetailStatus = STATUS.FAIL;
      });
  },
});

export default productDetailSlice.reducer;
