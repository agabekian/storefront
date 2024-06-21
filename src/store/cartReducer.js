import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        addedToCart: [],
    },
    reducers: {
        add_to_cart: (state, action) => {
            const { payload } = action;
            console.log("ADDING TO CART:", payload);

            const existingCartItem = state.addedToCart.find(item => item.item.name === payload.name);

            if (existingCartItem) {
                // If item already exists in cart, increase its quantity
                existingCartItem.quantity++;
            } else {
                // Item does not exist in cart, add new item
                state.addedToCart.push({ item: payload, quantity: 1 });
            }
        },
        delete_from_cart: (state, action) => {
            const { payload } = action;
            console.log("Deleting", payload.name);

            // Remove item from cart
            state.addedToCart = state.addedToCart.filter(item => item.item.name !== payload.name);
        }
    }
});

export const { add_to_cart, delete_from_cart } = cartSlice.actions;

export default cartSlice.reducer;
