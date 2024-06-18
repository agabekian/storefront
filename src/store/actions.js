// ACTION CREATORS
// Calling these with dispatch will return an action object that can be passed to the reducer and change state
export function dispatchData(category) {
    return {
        type: "FILTER_BY_CATEGORY",
        payload: category
    }
}