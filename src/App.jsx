import {useEffect, useState} from 'react'; // Import useState hook
import { Button, Typography, Card, CardContent, Grid } from '@mui/material';
import SimpleCart from './cart/SimpleCart.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchData, dispatchClicked } from './store/actions.js';
import Header from "./Header/Header.jsx";
import { getStuff } from './store/actions';

function App() {
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item for details view

    const displayedItems = useSelector((state) => state.inventory.displaySTATE || []);

    const handleDisplay = (e) => dispatch(dispatchData(e.target.name));
    const handleClick = (item) => {
        console.log(item);
        dispatch(dispatchClicked(item));
    };


    const handleViewDetails = (item) => {
        setSelectedItem(item); // Set the selected item in the state to display its details
    };

    const inventory = useSelector(state => state.inventory.items);
    console.log("INVNTORY", inventory);

    useEffect(() => {
        dispatch(getStuff());
    }, []);

    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>

                        {inventory.map((item) => (
                            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {item.name}
                                        </Typography>
                                        {selectedItem && selectedItem.id === item.id && ( // Check if the item is selected for details view
                                            <div>
                                                <Typography variant="body1" component="div">
                                                    Description: {item.description}
                                                </Typography>
                                                <Typography variant="body1" component="div">
                                                    Price: {item.price}
                                                </Typography>
                                            </div>
                                        )}
                                        {(selectedItem === null || selectedItem.id !== item.id) && ( // Check if the item is not selected for details view
                                            <Button variant="outlined" onClick={() => handleViewDetails(item)}>View
                                                Details</Button>
                                        )}
                                        {/* Always render the Add button */}
                                        <Button variant="outlined" onClick={() => handleClick(item)}>Add</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SimpleCart/> {/* Render SimpleCart component here */}
                </Grid>
            </Grid>
        </>
    );
}

export default App;
