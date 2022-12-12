import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./CardShirt.jsx";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useContext} from "react";
import {GeneralContext} from "../../GeneralContext.jsx";

export default function TShirtData() {
    const {tShirts,addItemToCart} =useContext(GeneralContext)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {tShirts.map((item) => (
                    <Grid item xs={2} sm={4} md={3} key={item}>
                        <MediaCard data={item}></MediaCard>
                        <CardActions sx={
                            {
                                justifyContent:"center",
                                marginTop:"10px",
                            }
                        }>
                            <Button onClick={() => addItemToCart(item)} sx={{
                                zIndex:"0"
                            }} variant="contained" color="success">
                                Agregar al carrito
                            </Button>
                        </CardActions>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
