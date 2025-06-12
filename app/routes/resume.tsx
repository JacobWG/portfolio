import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Resume() {
    return (
        <Box id="title" sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            minHeight: '35vh',
            width: 'calc(100vw - 200px)'
        }}>
            <Typography variant={'h2'}>Resume</Typography>
            <Typography>Currently in progress. Until then, please see <Link href={'https://docs.google.com/document/d/1IFNZhp3LLeMqzpSWzHQPz3I3JLmUYja6QJceGMEqmww/edit?usp=sharing'} target={'blank'}>the Google Drive version</Link>.</Typography>
        </Box>
    )
}