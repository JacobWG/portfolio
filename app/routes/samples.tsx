import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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
            <Box sx={{display: 'flex'}}>
                {SamplesRoutes.map((item, index) => (
                    <Card key={index}
                          elevation={2}
                          sx={{
                              margin: '1rem',
                              display: 'flex',
                              width: { xs: '100%', md: '45%', lg: '30%' },
                              flex: 'initial',
                              flexFlow: 'column',
                              justifyContent: 'space-between'
                    }}>
                        <CardContent>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem'}}>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="h6">{item.topic}</Typography>
                            </Box>
                            <Divider />
                            <Typography sx={{paddingTop: "1rem"}}>{item.text}</Typography>
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