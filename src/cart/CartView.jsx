import {useSelector, useDispatch} from 'react-redux';
import {Typography, Button, Box} from '@mui/material';
import {delete_from_cart, update_quantity} from '../store/cartReducer';
import {useNavigate} from 'react-router-dom';

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
            dispatch(update_quantity({item: item.item, quantity: newQuantity}));
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
        <Box sx={{mx: 33, mt: 4}}> {/* Adjusting l/r, plus top margins */}
            <Typography variant="body1" sx={{color: '#B0B0B0'}}>
                Your Shopping Cart
            </Typography>

            {cartItems.length === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid #ddd',
                            padding: '8px 0'
                        }}>
                            <Typography variant="h6" sx={{flexGrow: 1}}>{item.item.name}</Typography>
                            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Button size="small" onClick={() => handleQuantityChange(item, false)}>-</Button>
                                <Typography variant="body1" sx={{mx: 1}}>{item.quantity}</Typography>
                                <Button size="small" onClick={() => handleQuantityChange(item, true)}>+</Button>
                            </Box>
                            <Typography variant="body2" sx={{
                                width: '100px',
                                textAlign: 'right'
                            }}>${(item.item.price * item.quantity).toFixed(2)}</Typography>
                            <Button size="small" color="error" onClick={() => handleDelete(item)}>Delete</Button>
                        </Box>
                    ))}

                    <Typography variant="h6" sx={{textAlign: 'right', mt: 2}}>
                        Total Price: ${(totalPrice).toFixed(2)}
                    </Typography>

                    <Box sx={{display: 'flex', justifyContent: 'flex-end', marginTop: 2}}>
                        <Button variant="contained" color="primary" onClick={handleCheckout}>Checkout</Button>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default CartContents;
