import {useDispatch, useSelector} from 'react-redux';
import {Card, CardContent, Typography, Box, Stack, Button, ListItemText} from '@mui/material';
import {delete_from_cart} from "../store/cartReducer.js";
import React from "react";

const SimpleCart = () => {
        const cartItems = useSelector((state) => state.cart.addedToCart) || [];

        const dispatch = useDispatch();

        const deleteX = (cartItem) => {
            console.log("Delete request for", cartItem)
            dispatch(delete_from_cart(cartItem));
        }

        return (
            <Box sx={{backgroundColor: '#f0f0f0', padding: 2}}>
                <Typography variant="h6" gutterBottom>
                    Items In Cart
                </Typography>
                <Stack spacing={2}>
                    {cartItems.map((i) => (
                        <Card key={i.item.id} variant="outlined" sx={{backgroundColor: '#ffffff', padding: 2}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {i.item.name.toUpperCase()}
                                    <hr/>
                                    ${i.item.price}
                                    <ListItemText primary={i.item.name} secondary={`Quantity: ${i.quantity}`} />
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
                            <Button onClick={() => deleteX(i.item)}>delete</Button>
                        </Card>
                    ))}
                </Stack>
            </Box>
        );
    }
;

export default SimpleCart;
