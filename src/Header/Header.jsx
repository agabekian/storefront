import {useSelector} from 'react-redux';
import {Badge, AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SimpleCart = () => {
    const cartItems = useSelector((state) => state.cart.addedToCart) || [];

    return (
        <AppBar position="static">
            <Toolbar>

                <Typography variant="h4" component="div" sx={{
                    flexGrow: 1,
                    padding: '8px',
                    letterSpacing: '4px',

                    // textTransform: 'uppercase'
                }}>

                    <em>Norh front</em>
                </Typography>
                <IconButton color="inherit" aria-label="open cart">
                    <Badge badgeContent={cartItems.length} color="error">
                        <ShoppingCartIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default SimpleCart;
