import { Button, Typography, Card, CardContent, Grid } from '@mui/material';
import SimpleCart from './cart/SimpleCart.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchData, dispatchClicked } from './store/actions.js';

function App() {
    const dispatch = useDispatch();

    const displayedItems = useSelector((state) => state.inventory.displaySTATE || []);

    const handleDisplay = (e) => dispatch(dispatchData(e.target.name));
    const handleClick = (item) => {
        console.log(item);
        dispatch(dispatchClicked(item));
    };

    return (
        <>
            <Typography variant="h1">STOREFRONT</Typography>
            <Button variant="contained" onClick={handleDisplay} name="food">
                Food
            </Button>
            <Button variant="contained" onClick={handleDisplay} name="electronics">
                Electronics
            </Button>
            <Grid container spacing={2}>
                {displayedItems.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                    <Button
                                        onClick={() => handleClick(item)}
                                        variant="outlined"
                                    >
                                        Add
                                    </Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <SimpleCart /> {/* No need to pass cartItems as prop */}
        </>
    );
}

export default App;
