### Application State with Redux
#####  Author: A.Agabekian 
######  6.17.24 lab36
######  6.18.24 lab37 :
* Async with Thunk (remote)
* New header with cart icon
  * Displays cart size 
* Add to shopping cart. 
  * Checks if the item already in cart.
* Display cart items 
  * option to delete an item.
* MUI styling updated
* Began to modularize
######  6.18.24 lab39
* Migrated reducers to RTK. New "Details" component. Optimizations.

### Storefront

####  setup
`npm install react-redux  axios`

#### run
`npm run dev`

### UML
    -------------------------------------
    |             App                   |
    -------------------------------------
    | - displayedItems: Array          |
    | - dispatch: Function             |
    -------------------------------------
    | + handleDisplay(e: Event): void  |
    -------------------------------------
    
    -------------------------------------
    |          myReducer               |
    -------------------------------------
    | - initialState: Object           |
    -------------------------------------
    | + reducer(state: Object, action: Object): Object |
    -------------------------------------

#### from the bot:
`In Redux, you typically don't need to use useEffect to update the state in response to actions dispatched to the Redux store.

Redux operates on the principle of unidirectional data flow. When an action is dispatched, it flows through the Redux store and reducers are responsible for updating the state based on the action type and payload. React components that are subscribed to the Redux store through useSelector or connect automatically re-render when the state they are subscribed to changes.

So, when you dispatch an action that updates the Redux store, the reducers handle the state updates, and the components subscribed to the relevant parts of the state re-render automatically, reflecting the updated state.

useEffect is typically used in React components to perform side effects such as data fetching, subscriptions, or manually updating the DOM in response to changes in props or state. In Redux, reducers handle state updates, so you generally don't need useEffect for updating the state managed by Redux.`