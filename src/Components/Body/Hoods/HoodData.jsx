import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./CardHood.jsx";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function HoodData() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={3} key={index}>
                        <MediaCard></MediaCard>
                        <CardActions sx={
                            {
                                justifyContent:"center",
                                marginTop:"10px",
                            }
                        }>
                            <Button sx={{
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
