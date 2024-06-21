// import { combineReducers, createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
// import {thunk} from 'redux-thunk'; //lab38 middleware
// // import { composeWithDevTools } from '@redux-devtools/extension'; //not using it?
import inventory from './inventoryReducer.js'; //lab36
import cart from './cartReducer.js'; //lab37
import { configureStore } from '@reduxjs/toolkit'//lab 39


let reducers = combineReducers({cart, inventory});
// let reducers = combineReducers({ inventory }); //name shows later in hooks/state
// const store = createStore(reducers, composeWithDevTools()); //lab36


// const reducers = combineReducers( {stuff:stuffReducer } );


export default configureStore({
    reducer: reducers
})

// export default createStore(reducers, applyMiddleware(thunk));
