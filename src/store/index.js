import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import inventory from './inventory.js';

let reducers = combineReducers({ inventory });//name shows later in hooks/state

const store = createStore(reducers, composeWithDevTools());

export default store;
