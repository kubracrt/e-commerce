import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import CartSlice from './CartSlice';
import getDetailProductSlice from './ProductDetail';
import  authSlice  from './auth/index';
const store = configureStore({
  reducer: {
    auth: authSlice,
    carts: CartSlice,
    products: ProductSlice,
    productDetail: getDetailProductSlice,
  }
});

export default store;
