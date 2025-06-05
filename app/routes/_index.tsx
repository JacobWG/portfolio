import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Index() {
    return (
        <Box id={"title"} sx={{display: 'block', minHeight: '50vh'}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Jacob Gilbert
            </Typography>
            <Typography variant='h2' sx={{ marginBottom: 2 }}>
                Portfolio
            </Typography>
        </Box>
    )
}