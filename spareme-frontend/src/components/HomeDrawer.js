import { Add, ChatBubbleRounded, Close, LiveHelpRounded, PinDropOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { InterfaceContext } from '../services/interface-context';
import classes from './HomeDrawer.module.css';

const HomeDrawer = () => {

    const { drawerOpen, setDrawerOpen } = useContext(InterfaceContext);


  return (
    <Drawer open={drawerOpen}>
        <Box sx={{ display:'flex', flexDirection: 'column' }}>
            <div className={classes.topContainer}>
                <IconButton onClick={() => setDrawerOpen(false)} sx={{ alignSelf: 'flex-end', mr: 2, mb: 4 }}><Close sx={{ color: 'white', fontSize: 25 }}></Close></IconButton>
                <Typography variant='h6' sx={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>MY SPARES</Typography>
            </div>
            <Divider></Divider>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><PinDropOutlined></PinDropOutlined></ListItemIcon>
                        <ListItemText primary='Location' sx={{ color: 'black' }}></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><ChatBubbleRounded></ChatBubbleRounded></ListItemIcon>
                        <ListItemText primary='Chat' sx={{ color: 'black' }}></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><LiveHelpRounded></LiveHelpRounded></ListItemIcon>
                        <ListItemText primary='New Inquiry' sx={{ color: 'black' }}></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon><Add></Add></ListItemIcon>
                        <ListItemText primary='Post Inquiry' sx={{ color: 'black' }}></ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider></Divider>
        </Box>
    </Drawer>
  )
}

export default HomeDrawer