import {useEffect, useState} from 'react';
import { Button, Typography, Card, CardContent, Grid } from '@mui/material';
import SimpleCart from './cart/SimpleCart.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchData, dispatchClicked, getStuff } from './store/actions';
import Header from "./Header/Header.jsx";

function App() {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null);

    const displayedItems = useSelector((state) => state.inventory.displaySTATE || []);

    const handleDisplay = (category) => {
        dispatch(dispatchData(category));
    };

    const handleClick = (item) => {
        dispatch(dispatchClicked(item));
    };

    const handleViewDetails = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        dispatch(getStuff());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>
                        {displayedItems.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {item.name}
                                            <Typography variant="body1" component="div">
                                                {item.cat}
                                            </Typography>
                                        </Typography>
                                        {selectedItem && selectedItem.id === item.id && (
                                            <div>
                                                <Typography variant="body1" component="div">
                                                    Description: {item.description}
                                                </Typography>
                                                <Typography variant="body1" component="div">
                                                    Price: {item.price}
                                                </Typography>
                                            </div>
                                        )}
                                        {(selectedItem === null || selectedItem.id !== item.id) && (
                                            <Button variant="outlined" onClick={() => handleViewDetails(item)}>
                                                View Details
                                            </Button>
                                        )}
                                        <Button variant="outlined" onClick={() => handleClick(item)}>
                                            Add
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SimpleCart/>
                </Grid>
            </Grid>
        </>
    );
}

export default App;
