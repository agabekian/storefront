import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const CartContents = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Cart Contents
            </Typography>
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={item.item.name} secondary={`Quantity: ${item.quantity}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default CartContents;
