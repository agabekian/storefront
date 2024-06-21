import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'

export const stuffSlice = createSlice({
    name: 'stuff',

    initialState: {
        items: [],
        singleItem: {},
        displaySTATE: []
    },
    reducers: {
        get: (state, action) => {
            console.log("state before GET", action.type, state.items)
            state.items = action.payload;
        },
        show_details: (state, action) => {
            console.log("SHOW", action.type, action.payload);
            let found = state.items.find(item => item.id === action.payload)
            console.log("details", action.payload, found);
            return {
                ...state,
                singleItem: found || {}, // Set empty object if not found
            };
        },
        filter_cat: (state, action) => {
            const {type, payload} = action;
            console.log("SHOW", type, payload);
            for(let x of state.items) console.log(state.items.filter(item =>
                item.cat === payload))
            return {
                ...state,
                displaySTATE: state.items.filter(item =>
                    item.cat === payload)
            };
        }
    }
});

export const {
    get,
    show_details,
    filter_cat
} = stuffSlice.actions;

export const getStuff = () => async (dispatch) => {
    console.log("RUNNIG RTK")
    const url = import.meta.env.VITE_SERVER_URL;
    const token = import.meta.env.VITE_AUTH_KEY;
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    };
    const response = await axios.get(url, config);
    dispatch(get(response.data));
    console.log("response", response.data);
}

export default stuffSlice.reducer;


//OLD WAY
// const initialState = {
//     items: [],
//     singleItem: {},
//     displaySTATE: []
// };
//
// const inventoryReducer = (state = initialState, action) => {
//     let {type, payload} = action;
//     switch (type) {
//
//         case 'GET':
//             return {...state, items: payload};
//
//         case "FILTER_BY_CATEGORY":
//             console.log("received", payload)
//
//             return {
//                 ...state,
//                 displaySTATE: state.items.filter(item =>
//                     item.cat === payload)
//             };
//         case "GET_DETAILS":
//             console.log("details asked for", payload)
//
//             return {
//                 ...state,
//                 singleItem: state.items.find(item =>
//                     item.id === payload)
//             };
//
//
//         default:
//             return state;
//     }
//
// };

// export default inventoryReducer;
