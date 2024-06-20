// ACTION CREATORS
import axios from 'axios';

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

let url = import.meta.env.VITE_SERVER_URL;
export const getStuff = () => async (dispatch) => {
    const token = import.meta.env.VITE_AUTH_KEY;
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };

    try {
        const response = await axios.get(url, config);
        const actionObject = {
            type: "GET",
            payload: response.data
        };
        console.log(response.data);
        dispatch(actionObject);
    } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally, you can dispatch an error action here
    }
}

// Long form of the above
// export function getStuff() {
//   return async function (dispatch) {
//     const response = await axios.get(url);
//     const actionObject = {
//       type: "GET",
//       payload: response.data
//     }
//     dispatch(actionObject);
//   }
// }