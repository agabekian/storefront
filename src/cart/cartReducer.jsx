let initialState = {
    addedToCart: []
};

const cartReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                displaySTATE: state.items.filter(item => item.cat === payload)
            };
        default:
            return state;
    }
}
export default myReducer;



