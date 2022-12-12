import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from "./CardItem.jsx";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {useContext, useState} from "react";
import {GeneralContext} from "../../GeneralContext.jsx";
import TextField from "@mui/material/TextField";
import {IconButton, Modal, Stack} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import axios from "axios";

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

export default function ItemData() {
    const {item,addItem} =useContext(GeneralContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [product, setproduct] = useState({
        description: "",
        cakePicture: "",
        name:"",
        price: "",
        quantity:"",
        productTypeId: ""
    });

    const handleChange = e => {
        setproduct({...product ,[e.target.name]: e.target.value})
        console.log(product)
    }
    const handleSubmit = e => {
        e.preventDefault()
        setOpen(false)
        addItem(product);
        location.reload()
    }
    const handleChange1 = event => {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        console.log(...formData)
        const k = [...formData]
        console.log(k)
        axios.post('http://3.16.48.171:8080/file', formData
        ).then(function (response) {
            console.log(response)
            setproduct({...product, cakePicture: response.data});
        }).catch(function (error) {
            console.log(error);
        });
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Button onClick={handleOpen} sx={{
                margin:"20px",
                zIndex:"0"
            }} variant="contained" color="primary">
                ADD
            </Button>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {item.map((item) => (
                    <Grid item xs={2} sm={4} md={3} key={item}>
                        <MediaCard data={item}></MediaCard>
                    </Grid>
                ))}
            </Grid>
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
                    id="name"
                    label="name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    onChange={handleChange}
                    color='primary'
                    margin="normal"
                    required
                    fullWidth
                    name="productTypeId"
                    label="productTypeId"
                    id="productTypeId"
                    autoComplete="productTypeId"
                />
                <TextField
                    onChange={handleChange}
                    color='primary'
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="description"
                    name="description"
                    autoComplete="description"
                    autoFocus
                />
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Button variant="contained" component="label">
                        Upload
                        <input onChange={handleChange1} hidden type="file" />
                        <PhotoCamera />
                    </Button>
                </Stack>

                <TextField
                    onChange={handleChange}
                    color='primary'
                    margin="normal"
                    required
                    fullWidth
                    id="quantity"
                    label="quantity"
                    name="quantity"
                    autoComplete="quantity"
                    autoFocus
                />
                <TextField
                    onChange={handleChange}
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
        </Box>
    );
}
