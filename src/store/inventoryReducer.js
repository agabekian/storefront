// inventoryReducer.js
const initialState = {
    items: [],
    displaySTATE: []
};

const inventoryReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {

        case 'GET':
            console.log("XXXXXXXXXXXX",payload)
            return {...state, items: payload};

        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                displaySTATE: state.items.filter(item => item.category === payload)
            };
        default:
            return state;
    }

};

export default inventoryReducer;
