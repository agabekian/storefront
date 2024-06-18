// inventoryReducer.js
const initialState = {
    items: [
        { id: 1, cat: 'food', name: 'caviar', price: "you can't really afford" },
        { id: 2, cat: 'food', name: 'truffles', price: "1500 oregon dollars" },
        { id: 3, cat: 'electronics', name: 'tv', price: 699 },
        { id: 4, cat: 'electronics', name: 'radio', price: 19.99 },
    ],
    displaySTATE: []
};

const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                displaySTATE: state.items.filter(item => item.cat === action.payload)
            };
        default:
            return state;
    }
};

export default inventoryReducer;
