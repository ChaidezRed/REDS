import * as React from 'react';
import Container from '@mui/material/Container';
import {ShirtStyle} from "./ShirtStyle.jsx";
import ItemData from "./ItemData.jsx";

export default function ItemBody() {

    return (
        <ShirtStyle>
            <Container maxWidth="xl">
                <ItemData></ItemData>
            </Container>
        </ShirtStyle>


    );
}
