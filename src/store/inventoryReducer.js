// inventoryReducer.js
const initialState = {
    items: [],
    displaySTATE: []
};

const inventoryReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {

        case 'GET':
            return {...state, items: payload};

        case "FILTER_BY_CATEGORY":
            console.log("received",payload)

            return {
                ...state,
                displaySTATE: state.items.filter(item =>
                    item.cat === payload)
            };
        default:
            return state;
    }

};

export default inventoryReducer;
