import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {ProjectsRoutes} from "~/components/ProjectsData";
import ItemCard from "~/components/ItemCard";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import {Link} from "react-router";

export default function Projects() {
    return (
        <Box id='samples' sx={{display: 'block', minHeight: '50vh', p: 2}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Projects
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                The projects listed here were completed entirely by or led by me. Work is shown where possible, however several of these projects were internal to Zonar.
            </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {ProjectsRoutes.map((item, index) => (
                    <ItemCard key={index}>
                        <CardContent>
                            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="h6">{item.tools}</Typography>
                            </Box>
                            <Divider />
                            <Typography sx={{paddingTop: "1rem"}}>{item.text}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to={item.path}>View Summary</Button>
                        </CardActions>
                    </ItemCard>
                ))}
            </Box>
        </Box>
    )
}