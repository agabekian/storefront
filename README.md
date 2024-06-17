### Application State with Redux
#####  Author: A.Agabekian 
#####  6.17.24 lab36
### Storefront

####  setup
`npm install react-redux`

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

