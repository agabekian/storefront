const initialState = {
    addedToCart: []
};

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;
    const existingCartItemIndex = state.addedToCart.findIndex(item => item.item.name === payload.name);

    switch (type) {
        case "ADD_TO_CART":
            if (existingCartItemIndex !== -1) {
                // Item already exists in cart, update quantity
                const updatedCart = [...state.addedToCart];
                updatedCart[existingCartItemIndex].quantity++;
                return {
                    ...state,
                    addedToCart: updatedCart
                };
            } else {
                // Item does not exist in cart, add new item
                return {
                    ...state,
                    addedToCart: [
                        ...state.addedToCart,
                        { item: payload, quantity: 1 }
                    ]
                };
            }
        case "DELETE_CART_ITEM":
            if (existingCartItemIndex !== -1) {
                // Item exists in cart, create a new cart array without the deleted item
                const updatedCart = state.addedToCart.filter((item, index) => index !== existingCartItemIndex);
                console.log("Deleting", payload.name);
                return {
                    ...state,
                    addedToCart: updatedCart
                };
            }
            return state; // If item not found, return current state
        default:
            return state;
    }
};

export default cartReducer;
