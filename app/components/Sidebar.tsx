import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router';
import {SidebarRoutes} from "~/components/SidebarData";
import {SidebarExternalLinks} from "~/components/SidebarData";

export const drawerWidth = 175;

export default function PermanentDrawerLeft() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <List className={"sidebarlist"} sx={{pl: 2, pt:0}}>
                {SidebarRoutes.map((item, index) => (
                    <ListItem key={index} className={item.cName} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                            <ListItemIcon sx={{minWidth: '40px'}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{marginBottom: '3rem', marginTop: '3rem'}} />
            <List className={"sidebarlist"} sx={{pl: 2}}>
                {SidebarExternalLinks.map((item, index) => (
                    <ListItem key={index} className={item.cName} disablePadding>
                        <ListItemButton component={Link} to={item.path} target="_blank">
                            <ListItemIcon sx={{minWidth: '40px'}}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}