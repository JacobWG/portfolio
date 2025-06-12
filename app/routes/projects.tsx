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

export default function Projects() {
    return (
        <Box id='samples' sx={{display: 'block', minHeight: '50vh'}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Projects
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                The projects listed here were completed entirely by me or led by me. Work is shown where I'm able to, however several of these projects were internal to Zonar.
            </Typography>
            <Box sx={{display: 'flex'}}>
                {SamplesRoutes.map((item, index) => (
                    <Card key={index}
                          elevation={2}
                          sx={{
                              margin: '1rem',
                              minWidth: '10rem',
                              maxWidth: '20%',
                              display: 'flex',
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