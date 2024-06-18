let initialState = {
    addedToCart: []
};

const cartReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "ADD_TO_CART":
            const existingCartItemIndex = state.addedToCart.findIndex(item => item.item.name === payload.name);

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
        default:
            return state;
    }
};

export default cartReducer;
