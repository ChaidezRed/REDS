import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {BodyTenis} from "./TenisStyle";
import ResponsiveGrid from "./TenisData";

export default function TenisShopBody() {

    return (
        <BodyTenis>
            <Container maxWidth="xl">
                <ResponsiveGrid></ResponsiveGrid>
            </Container>
        </BodyTenis>


    );
}
