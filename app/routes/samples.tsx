import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemCard from "~/components/ItemCard";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Link} from 'react-router';
import {SamplesRoutes} from "~/components/SamplesData";
import Divider from '@mui/material/Divider';

export default function Samples() {
    return (
        <Box id='samples' sx={{display: 'block', minHeight: '50vh', p: 2}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Samples
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                The samples listed here are all my work. Most are taken from Zonar Systems' support site, and where possible the sample is linked to the source URL.
            </Typography>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {SamplesRoutes.map((item, index) => (
                    <ItemCard key={index}>
                        <CardContent>
                            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="h6" sx={{marginLeft: 'auto'}}>{item.topic}</Typography>
                            </Box>
                            <Divider />
                            <Typography sx={{paddingTop: "1rem"}}>{item.text}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to={item.path}>View Article</Button>
                        </CardActions>
                    </ItemCard>
                ))}
            </Box>
        </Box>
    )
}