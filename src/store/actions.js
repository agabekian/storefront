// ACTION CREATORS
// Calling these with dispatch will return an action object that can be passed to the reducer and change state
export function dispatchData(category) {
    return {
        type: "FILTER_BY_CATEGORY",
        payload: category
    }
}
export function dispatchClicked(item) {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export function deleteClicked(item) {
    return {
        type: "DELETE_CART_ITEM",
        payload: item
    }
}