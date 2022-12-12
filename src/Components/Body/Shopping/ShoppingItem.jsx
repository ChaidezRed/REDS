import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Shirt from "../../../assets/Shirt.png"
import Hood from "../../../assets/sueter.png";
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import {useContext, useState} from "react";
import {GeneralContext} from "../../GeneralContext.jsx";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MediaCard({data}) {
    const {addItemToCart,removeItemsToCart}= useContext(GeneralContext)
    const {id,cakePicture,description,name,price,amount} = data
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
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
                    <Typography textAlign="center" >Precio: {price}</Typography>
                    <Typography textAlign="center" >Total: {price * amount}</Typography>
                    <Typography textAlign="center" >Cantidad: {amount}</Typography>
                </Typography>
            </CardContent>
            <CardActions sx={
                {
                    justifyContent:"center",
                    marginTop:"10px",
                }
            }>
                <Button onClick={() => addItemToCart(data)} sx={{
                    zIndex:"0"
                }} variant="contained" color="success">
                    Agregar
                </Button>
                <Button onClick={() => removeItemsToCart(data)} sx={{
                    zIndex:"0"
                }} variant="contained" color="secondary">
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    );
}
