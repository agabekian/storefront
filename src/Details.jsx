import { Card, CardContent, Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Details() {
    // Use useSelector to access the singleItem state from the Redux store
    const itemDetails = useSelector((state) =>
        state.inventory.singleItem || { name: "not found", price: "", description: "", cat: "" }
    );

    console.log("IN JSX", itemDetails);

    return (
        <Container maxWidth="md" sx={{ marginTop: 4 }}> {/* Adjust marginTop to align below header */}
            <Card sx={{ width: '100%', padding: 4 }}>
                <CardContent>
                    <Typography variant="h3" component="div" gutterBottom>
                        {itemDetails.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Price: ${itemDetails.price}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {itemDetails.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Category: {itemDetails.cat}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
}
