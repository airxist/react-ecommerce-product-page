import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import picSlice from './slices/picSlice';
import menuSlice from './slices/menuSlice';
import modalSlice from './slices/modalSlice';

const store = configureStore({
    reducer : {
        cart: cartSlice.reducer,
        pic: picSlice.reducer,
        menu: menuSlice.reducer,
        modal: modalSlice.reducer
    }
})

export default store;