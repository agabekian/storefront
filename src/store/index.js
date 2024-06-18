import {createStore, combineReducers} from 'redux';
// import { composeWithDevTools } from '@redux-devtools/extension'; //not using it?
import inventory from './inventoryReducer.js'; //lab36
import cart from './cartReducer.js'; //lab37

let reducers = combineReducers({cart: cart, inventory});


// let reducers = combineReducers({ inventory }); //name shows later in hooks/state
// const store = createStore(reducers, composeWithDevTools()); //lab36

export default createStore(reducers); //newer?
