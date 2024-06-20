import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import {getStuff} from './store/actions';
import Header from "./Header/Header.jsx";
import ProductsDisplay from "./ProductsDisplay.jsx";
import SimpleCart from './cart/SimpleCart.jsx';
import Details from './Details.jsx';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStuff());
    }, [dispatch]);

    return (<Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Grid item xs={12} md={3}>
                <ProductsDisplay/>
                <SimpleCart/></Grid>}/>
            <Route path="/item-details/:id" element={<Details/>}/>


        </Routes>
    </Router>);
}

export default App;
