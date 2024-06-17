let initialState = {
    items: [
        {id: 1, cat: 'food', 'name': 'caviar'},
        {id: 2, cat: 'food', 'name': 'truffles'},
        {id: 3, cat: 'electronics', 'name': 'tv'},
        {id: 4, cat: 'electronics', 'name': 'radio'},
    ],
    displaySTATE: []
};

// When we "dispatch" an action ...
// action is going to be an object that looks like this: { type: 'INCREMENT', payload: 1 }

const myReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {
        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                displaySTATE: state.items.filter(item => item.cat === payload)
            };
        default:
            return state;
    }
}
export default myReducer;

// ACTION CREATORS
// Calling these with dispatch will return an action object that can be passed to the reducer and change state
export function dispatchData(category) {
    return {
        type: "FILTER_BY_CATEGORY",
        payload: category
    }
}

