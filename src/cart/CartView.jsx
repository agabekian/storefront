import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Typography, Card, CardContent, Grid } from '@mui/material';
// import { formatPrice } from './utils'; // Import custom formatPrice function (optional)

const CartContents = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];

    // Calculate total price (replace with your logic)
    const totalPrice = cartItems.reduce((total, item) => total + item.item.price * item.quantity, 0);

    return (
        <Stack spacing={2}>
            <Typography variant="h5" gutterBottom>
                Cart Contents
            </Typography>
            {cartItems.map((item, index) => (
                <Card key={index} sx={{ backgroundColor: '#f5f5f5' }}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {item.item.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2" color="text.secondary" textAlign="center">
                                    Quantity: {item.quantity}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2" color="text.secondary" textAlign="right">
                                    {(item.item.price * item.quantity)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            ))}
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'right' }}>
                Total Price: {(totalPrice)}
            </Typography>
        </Stack>
    );
};

export default CartContents;
