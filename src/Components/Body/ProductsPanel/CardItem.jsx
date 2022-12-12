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
    const {editItem,delateItem}= useContext(GeneralContext)
    const {id,cakePicture,description,name,price} = data
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [product, setproduct] = useState({
        id: id ,
        description: "",
        name:"",
        price: "",
        quantity:"",
    });

    const handleChange = e => {
        setproduct({...product ,[e.target.name]: e.target.value})
        console.log(product)
    }
    const handleSubmit = e => {
        e.preventDefault()
        editItem(product);
    }
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
            <CardActions sx={
                {
                    justifyContent:"center",
                    marginTop:"10px",
                }
            }>
                <Button onClick={() => delateItem(id)} sx={{
                    zIndex:"0"
                }} variant="contained" color="secondary">
                    Eliminar
                </Button>
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box  component="form" noValidate onSubmit={handleSubmit} sx={style}>
                    <TextField
                        onChange={handleChange}
                        color='primary'
                        margin="normal"
                        required
                        fullWidth
                        id="quantity"
                        label="Cantidad"
                        name="quantity"
                        autoComplete="quantity"
                        autoFocus
                    />
                    <TextField
                        onClick={handleChange}
                        color='primary'
                        margin="normal"
                        required
                        fullWidth
                        name="price"
                        label="Price"
                        id="price"
                        autoComplete="current-price"
                    />
                    <Button
                        color="secondary"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Enviar
                    </Button>
                </Box>
            </Modal>
        </Card>




    );
}
