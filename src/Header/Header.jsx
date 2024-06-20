import { useDispatch, useSelector } from 'react-redux';
import { Badge, AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { dispatchClicked, dispatchData } from "../store/actions.js";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SimpleCart = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];
    const dispatch = useDispatch();

    const handleDisplay = (e) => {
        dispatch(dispatchData(e.target.name));
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
                <IconButton color="inherit" aria-label="open cart">
                    <Badge badgeContent={cartItems.length} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default SimpleCart;
