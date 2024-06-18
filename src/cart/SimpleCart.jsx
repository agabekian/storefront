import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material';

const SimpleCart = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];

    return (
        <Box sx={{ backgroundColor: '#f0f0f0', padding: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                YOUR CART:
            </Typography>
            <Stack spacing={2}>
                {cartItems.map((i) => (
                    <Card key={i.item.id} variant="outlined" sx={{ backgroundColor: '#ffffff', padding: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {i.item.name.toUpperCase()}
                                <br />
                                ${i.item.price}
                            </Typography>

                            <Typography
                                variant="body2"
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    marginTop: 1,
                                    padding: '2px 4px',
                                    border: '1px solid',
                                    borderColor: 'text.secondary',
                                    borderRadius: '4px',
                                    color: 'text.secondary',
                                }}
                            >
                                {i.item.cat}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
};

export default SimpleCart;
