import { useSelector, useDispatch } from 'react-redux';
import { Stack, Typography, Card, CardContent, Grid, Button, Box } from '@mui/material';
import { delete_from_cart, update_quantity } from '../store/cartReducer';
import { useNavigate } from 'react-router-dom';

const CartContents = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.item.price * item.quantity, 0);

    // Handle quantity change
    const handleQuantityChange = (item, increment) => {
        const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;

        // Check if reducing quantity below 1 and ask for confirmation
        if (newQuantity < 1) {
            const confirmDelete = window.confirm("Are you sure you want to remove this item from the cart?");
            if (confirmDelete) {
                dispatch(delete_from_cart(item.item)); // Remove item from cart
            }
        } else {
            dispatch(update_quantity({ item: item.item, quantity: newQuantity }));
        }
    };

    // Handle item deletion
    const handleDelete = (item) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item from the cart?");
        if (confirmDelete) {
            dispatch(delete_from_cart(item.item));
        }
    };

    // Handle checkout
    const handleCheckout = () => {
        navigate('/checkout'); // Example: Navigate to a checkout page
    };

    return (
        <Stack spacing={4}>
            <Typography variant="h5" gutterBottom>
                Cart Contents
            </Typography>

            {cartItems.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <Card key={index} sx={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                            <CardContent>
                                <Grid container alignItems="center" spacing={2}>
                                    <Grid item xs={6} sm={4}>
                                        <Typography variant="h6" component="div">
                                            {item.item.name}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={4} sm={3}>
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <Button
                                                size="small"
                                                onClick={() => handleQuantityChange(item, false)}
                                                sx={{ minWidth: '30px' }}
                                            >
                                                -
                                            </Button>
                                            <Typography variant="body1" component="span" sx={{ mx: 1 }}>
                                                {item.quantity}
                                            </Typography>
                                            <Button
                                                size="small"
                                                onClick={() => handleQuantityChange(item, true)}
                                                sx={{ minWidth: '30px' }}
                                            >
                                                +
                                            </Button>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={4} sm={3}>
                                        <Typography variant="body2" textAlign="right">
                                            ${(item.item.price * item.quantity).toFixed(2)}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={2} sm={2}>
                                        <Button
                                            size="small"
                                            color="error"
                                            onClick={() => handleDelete(item)}
                                            sx={{ minWidth: '30px' }}
                                        >
                                            Delete
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    ))}

                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'right' }}>
                        Total Price: ${(totalPrice).toFixed(2)}
                    </Typography>

                    <Box display="flex" justifyContent="flex-end">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </Button>
                    </Box>
                </>
            )}
        </Stack>
    );
};

export default CartContents;
