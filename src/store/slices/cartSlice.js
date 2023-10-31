import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    total: 0,
    showCart: false,
    items: [],
    quantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increment( state, action ) {
            ++state.total;
        },
        decrement( state, action ) {
            --state.total;
        },
        addToCart( state, action ) {
            let newItem = action.payload;
            if(state.total) {
                state.quantity = newItem.quantity; // updating state quantity after operation from cartActions.addToCart()
                state.total = 0;
                if(state.items.length === 0) {
                    state.items.push(newItem); // when items array is zero add the newItem
                } else {
                    state.items.forEach(item => {
                        if(item.name === newItem.name) {
                            item.quantity = newItem.quantity; // updating old item quantity
                        } else {
                            state.items.push(newItem);
                        }
                    })
                }
            }
        },
        showCart( state, action ) {
            state.showCart = !state.showCart;
        },
        clearCart( state, action ) {
            state.items = state.items.filter(item => item.name !== action.payload);
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;