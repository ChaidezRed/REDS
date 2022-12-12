import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./ShoppingItem.jsx";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useContext, useEffect, useState} from "react";
import {GeneralContext} from "../../GeneralContext.jsx";
import TextField from "@mui/material/TextField";

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton, List, ListItem, ListItemAvatar, ListItemText,
    Modal,
    Stack
} from "@mui/material";
import {ListShopping} from "./ListShopping";
import {useNavigate} from "react-router-dom";

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

export default function ShoppingDate() {
    const {cartItems,setCartItems} =useContext(GeneralContext)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => {
        setCartItems([])
        setOpen(false)
        navigate("/Home")
    };
    const [productsLength, setProductsLength] = useState(0)



    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous +current.amount, 0)
        );
    }, [cartItems]);

    console.log(cartItems)
    const total = cartItems?.reduce(
        (previous, current) => previous + current.amount * current.price,
        0
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Button onClick={() => {setOpen(true);}} sx={{
                marginBottom:"20px",
                zIndex:"0"
            }} variant="contained" color="success">
                Pagar
            </Button>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {cartItems.map((item) => (
                    <Grid item xs={2} sm={4} md={3} key={item}>
                        <MediaCard data={item}></MediaCard>
                    </Grid>
                ))}
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"REDS"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Gracias por su Compra<br/>
                        Resumen de compra:
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {cartItems.map((data) =>(
                                <ListShopping data={data}></ListShopping>
                                )
                            )}
                            <h3>Total de todo: {total}</h3>
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
