import * as React from 'react';
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

export default function ResponsiveSidebar() {
    return (
        <div>
            <Toolbar sx={{ml:2}}>Jacob Gilbert</Toolbar>
            <Divider />
            <List className={"sidebarList"} sx={{pl: 2, pt:0, mt: '1rem'}}>
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
            <Divider sx={{marginBottom: '2rem', marginTop: '1rem'}} />
            <List className={"sidebarList"} sx={{pl: 2}}>
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
        </div>
    )
}