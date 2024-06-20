import {Button, Card, CardContent, Grid, Typography} from "@mui/material";
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {detailsClicked, dispatchClicked, getStuff} from './store/actions';
import {useNavigate, Navigate} from 'react-router-dom'; // Import useHistory

export default function ProductsDislay() {
    const dispatch = useDispatch();

    const navigate = useNavigate(); // Initialize useNavigate hook

    const displayedItems = useSelector((state) => state.inventory.displaySTATE || []);

    const handleAdd = (category) => dispatch(dispatchClicked(category));

    const handleDetails = (item) => {
        dispatch(detailsClicked(item.id))
        navigate(`/item-details/${item.id}`); // Use navigate to change the route
    };

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
                                        <Button onClick={() => handleDetails(item)}>Details</Button>
                                    </Typography>

                                    <Button variant="outlined" onClick={() => handleAdd(item)}>
                                        Add
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}
