// inventoryReducer.js
const initialState = {
    items: [],
    singleItem: {},
    displaySTATE: []
};

const inventoryReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {

        case 'GET':
            return {...state, items: payload};

        case "FILTER_BY_CATEGORY":
            console.log("received", payload)

            return {
                ...state,
                displaySTATE: state.items.filter(item =>
                    item.cat === payload)
            };
        case "GET_DETAILS":
            console.log("details asked for", payload)

            return {
                ...state,
                singleItem: state.items.find(item =>
                    item.id === payload)
            };


        default:
            return state;
    }

};

export default inventoryReducer;
