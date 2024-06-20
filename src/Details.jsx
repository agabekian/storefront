import { Button, Card, CardContent, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";

export default function Details() {
    const itemDetails = useSelector((state) => state.inventory.singleItem || { name: "not found", price: "", description: "", cat: "" });

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
