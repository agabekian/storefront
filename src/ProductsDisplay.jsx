import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchClicked, getStuff } from './store/actions';

export default function ProductsDislay(){
    const dispatch = useDispatch();

    const displayedItems = useSelector((state) => state.inventory.displaySTATE || []);

    const [selectedItem, setSelectedItem] = useState(null); //move to store?


    const handleClick = (category) => dispatch(dispatchClicked(category));

    const handleViewDetails = (item) => setSelectedItem(item);

    useEffect(() => {
        dispatch(getStuff());
    }, [dispatch]);

return (
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
    </Grid>
)}