import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        addedToCart: JSON.parse(localStorage.getItem('cart')) || [], // Load from localStorage
    },
    reducers: {
        add_to_cart: (state, action) => {
            const {payload} = action;
            console.log("ADDING TO CART:", payload);

            const existingCartItem = state.addedToCart.find(item => item.item.name === payload.name);

            if (existingCartItem) {
                // If item already exists in cart, increase its quantity
                existingCartItem.quantity++;
            } else {
                // Item does not exist in cart, add new item
                state.addedToCart.push({item: payload, quantity: 1});
            }

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(state.addedToCart));

            // Uncomment for API call to persist cart
            /*
            const token = import.meta.env.VITE_AUTH_KEY;
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/Cart`
            const config = { headers: { Authorization: `Bearer ${token}` } };

            axios.post(url, { cart: state.addedToCart }, config)
                .then(response => console.log("Cart saved", response.data))
                .catch(err => console.error("Failed to save cart", err));
            */
        },
        update_quantity: (state, action) => {
            const {item, quantity} = action.payload;
            const existingCartItem = state.addedToCart.find(cartItem => cartItem.item.name === item.name);

            if (existingCartItem) {
                existingCartItem.quantity = quantity;
                // Remove item if quantity is 0
                if (existingCartItem.quantity <= 0) {
                    state.addedToCart = state.addedToCart.filter(cartItem => cartItem.item.name !== item.name);
                }
                localStorage.setItem('cart', JSON.stringify(state.addedToCart));
            }
        },
        delete_from_cart: (state, action) => {
            const {payload} = action;
            console.log("Deleting", payload.name);

            // Remove item from cart
            state.addedToCart = state.addedToCart.filter(item => item.item.name !== payload.name);

            // Update the cart in localStorage after deletion
            localStorage.setItem('cart', JSON.stringify(state.addedToCart));

            // Optionally add an API call to sync the cart after deletion
            /*
            const token = import.meta.env.VITE_AUTH_KEY;
            const url = `${import.meta.env.VITE_SERVER_URL}/api/v1/Cart`
            const config = { headers: { Authorization: `Bearer ${token}` } };

            axios.post(url, { cart: state.addedToCart }, config)
                .then(response => console.log("Cart updated", response.data))
                .catch(err => console.error("Failed to update cart", err));
            */
        }
    }
});

export const {add_to_cart, update_quantity, delete_from_cart} = cartSlice.actions;

export default cartSlice.reducer;
