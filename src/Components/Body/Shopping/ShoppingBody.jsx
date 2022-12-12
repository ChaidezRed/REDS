import * as React from 'react';
import Container from '@mui/material/Container';
import {ShirtStyle} from "./ShirtStyle.jsx";
import ShoppingDate from "./ShoppingDate.jsx";

export default function ShoppingBody() {

    return (
        <ShirtStyle>
            <Container maxWidth="xl">
                <ShoppingDate></ShoppingDate>
            </Container>
        </ShirtStyle>


    );
}
