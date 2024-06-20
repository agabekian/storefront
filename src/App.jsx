import {useEffect} from 'react';
import { Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import {getStuff} from './store/actions';
import Header from "./Header/Header.jsx";
import ProductsDisplay from "./ProductsDisplay.jsx";
import SimpleCart from './cart/SimpleCart.jsx';

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStuff());
    }, [dispatch]);

    return (
        <>
            <Header/>
            <Grid item xs={12} md={3}>
                <ProductsDisplay/>
                <SimpleCart/>
            </Grid>
        </>
    );
}

export default App;
