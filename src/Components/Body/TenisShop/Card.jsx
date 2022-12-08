import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tenis from "../../../assets/PngItem_6808657.png"

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 400,
                    padding: 5
        }}>
            <Typography
                textAlign="center"
                gutterBottom variant="h5"
                component="div">
                Nombre del Tenis
            </Typography>
            <CardMedia sx={{
                objectFit:"contain"
            }}
                component="img"
                height="280"
                image={Tenis}
                alt="TenisProducto"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
        </Card>
    );
}
