import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Samples() {
    return (
        <Box id={"title"} sx={{display: 'block', minHeight: '50vh'}}>
            <Typography variant="h1" sx={{ marginBottom: 2 }}>
                Samples
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                The samples listed here are all my work. Most are taken from Zonar Systems' support site, and where possible the sample is linked to the source URL.
            </Typography>
        </Box>
    )
}