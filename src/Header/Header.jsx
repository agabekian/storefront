import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { filter_cat } from "../store/inventoryReducer.js";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SimpleCart = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const dispatch = useDispatch();

    const handleDisplay = (e) => {
        dispatch(filter_cat(e.target.name));
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1, padding: '8px', letterSpacing: '4px' }}>
                    <Button component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
                        <em>Norh front</em>
                    </Button>
                    <Button variant="contained" onClick={handleDisplay} name="food">
                        Food
                    </Button>
                    <Button variant="contained" onClick={handleDisplay} name="electronics">
                        Electronics
                    </Button>
                </Typography>
                <IconButton color="inherit" aria-label="open cart" component={Link} to="/cart">
                    <Badge badgeContent={totalQuantity} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default SimpleCart;
