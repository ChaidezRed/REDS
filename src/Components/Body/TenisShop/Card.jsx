import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tenis from "../../../assets/PngItem_6808657.png"

export default function MediaCard({data}) {
    const {cakePicture,description,name,price} = data
    return (
        <Card sx={{ maxWidth: 400,
                    padding: 5
        }}>
            <Typography
                textAlign="center"
                gutterBottom variant="h5"
                component="div">
                {name}
            </Typography>
            <CardMedia sx={{
                objectFit:"contain"
            }}
                component="img"
                height="280"
                image={cakePicture}
                alt="TenisProducto"
            />
            <CardContent>
                <Typography textAlign="center" variant="body2" color="text.secondary">
                    {description}
                    <Typography textAlign="center" >{price}</Typography>
                </Typography>
            </CardContent>
        </Card>
    );
}
