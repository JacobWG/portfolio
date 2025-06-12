import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Projects() {
    return (
        <Box id='samples' sx={{display: 'block', minHeight: '50vh'}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Projects
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                The projects listed here were completed entirely by me or led by me. Work is shown where I'm able to, however several of these projects were internal to Zonar.
            </Typography>
            <Typography variant={'h3'}>In progress.</Typography>
        </Box>
    )
}