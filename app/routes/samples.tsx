import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Link} from 'react-router';
import {SamplesRoutes} from "~/components/SamplesData";

export default function Samples() {
    return (
        <Box id='samples' sx={{display: 'block', minHeight: '50vh'}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Samples
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                The samples listed here are all my work. Most are taken from Zonar Systems' support site, and where possible the sample is linked to the source URL.
            </Typography>
            <Box sx={{display: 'flex'}}>
                {SamplesRoutes.map((item, index) => (
                    <Card key={index} sx={{margin: '1rem', minWidth: '10rem', maxWidth: '20%', display: 'flex', flexFlow: 'column', justifyContent: 'space-between'}}>
                        <CardContent>
                            <Typography variant="h5" sx={{paddingBottom: "0.5rem"}}>{item.title}</Typography>
                            <Typography>{item.text}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button component={Link} to={item.path}>View Article</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}