import * as React from 'react';
import Container from '@mui/material/Container';
import {ShirtStyle} from "./ShirtStyle.jsx";
import TShirtData from "./TShirtData.jsx";

export default function TShirtShopBody() {

    return (
        <ShirtStyle>
            <Container maxWidth="xl">
                <TShirtData></TShirtData>
            </Container>
        </ShirtStyle>


    );
}
