import { useSelector, useDispatch } from 'react-redux';
import { dispatchData } from './store/actions.js';
import { Button, Typography, List, ListItem } from '@mui/material';
import SimpleCart from './cart/SimpleCart.jsx';

function App() {
    const dispatch = useDispatch();

    const displayedItems = useSelector(
        (state) => state.inventory.displaySTATE || []
    );

    const handleDisplay = (e) => dispatch(dispatchData(e.target.name));

    return (
        <>
            <Typography variant="h1">STOREFRONT</Typography>
            <Button variant="contained" onClick={handleDisplay} name="food">
                Food
            </Button>
            <Button variant="contained" onClick={handleDisplay} name="electronics">
                Electronics
            </Button>
            <List>
                {displayedItems.map((item) => (
                    <ListItem key={item.id}>{item.name}</ListItem>
                ))}
            </List>
            <SimpleCart />
        </>
    );
}

export default App;
