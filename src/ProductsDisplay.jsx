import { Button, Card, CardContent } from "@mui/material";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { show_details } from './store/inventoryReducer.js';
import { add_to_cart } from './store/cartReducer.js';
import { useNavigate } from 'react-router-dom';

export default function ProductsDisplay() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const displayedItems = useSelector((state) => state.inventory.displaySTATE || []);

    const handleAdd = (item) => dispatch(add_to_cart(item));

    const handleDetails = (item) => {
        dispatch(show_details(item.id));
        navigate(`/item-details/${item.id}`);
    };

    const cardStyle = {
        width: '240px',
        fontFamily: 'Roboto, sans-serif', // Apply the chosen font
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {displayedItems.map((item) => (
                <Card key={item.id} variant="outlined" style={cardStyle}>
                    <CardContent>
                        <h5 style={{ fontFamily: 'Roboto, sans-serif' }}>{item.name}</h5>
                        <Button onClick={() => handleDetails(item)}>Details</Button>
                        <Button variant="outlined" onClick={() => handleAdd(item)}>Add</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
