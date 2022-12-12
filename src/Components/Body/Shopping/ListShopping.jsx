import {Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from 'react';

export function ListShopping({data}) {
    const {id,cakePicture,description,name,price,amount} = data
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={cakePicture} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                              Precio:  {price}
                            </Typography>
                            <br/>
                            Total: {price * amount}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}