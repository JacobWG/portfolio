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

const drawerWidth = 200;

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
            <List className={"sidebarlist"}>
                {SidebarRoutes.map((item, index) => (
                    <ListItem key={index} className={item.cName} disablePadding>
                        <ListItemButton component={Link} to={item.path}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider sx={{marginBottom: '3rem', marginTop: '3rem'}} />
            <List className={"sidebarlist"}>
                {SidebarExternalLinks.map((item, index) => (
                    <ListItem key={index} className={item.cName} disablePadding>
                        <ListItemButton component={Link} to={item.path} target="_blank">
                            <ListItemIcon>
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