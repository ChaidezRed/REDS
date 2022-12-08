import * as React from 'react';
import Container from '@mui/material/Container';
import {HoodStyle} from "./HoodStyle.jsx";
import HoodData from "./HoodData.jsx";

export default function HoodShopBody() {

    return (
        <HoodStyle>
            <Container maxWidth="xl">
                <HoodData></HoodData>
            </Container>
        </HoodStyle>


    );
}
