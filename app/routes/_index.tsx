import * as React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';

export default function Index() {
    return (
        <>
            <Box id="title" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '35vh',
                width: '100%'
            }}>
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '8rem' }}}>
                    Jacob Gilbert
                </Typography>
            </Box>
            <Box id="frontpage" sx={{
                margin: '1.5rem',
            }}>
                <Typography>Hello! I'm a technical writer based in Renton, WA with 7+ years of writing experience and 20 years of problem-solving and customer service experience.</Typography>
                <Typography>My expertise is in:</Typography>
                <List>
                    <ListItem>
                        <strong>Technical Writing</strong>: Manuals, Troubleshooting, FAQs, Procedures, and other long-form documentation
                    </ListItem>
                    <ListItem>
                        <strong>UI/UX Writing</strong>: Tooltips, Modals, UI Elements, and other in-app help
                    </ListItem>
                    <ListItem>
                        <strong>Docs as Code</strong>: Reusable content, version control, DITA, XML, Git, GitHub
                    </ListItem>
                    <ListItem><strong>Development</strong>: HTML, CSS, Javascript, jQuery, React.js, Python</ListItem>
                </List>
                <Typography>Visit the Projects link in the left sidebar for a description of various projects
                I've completed over the years. The Samples link leads to direct writing samples.</Typography>
                <Typography variant={"h3"} sx={{pt: 2}}>About this site</Typography>
                <Typography sx={{pt: 2}}>
                    This portfolio site is:
                </Typography>
                <List sx={{marginTop: '5px'}}>
                    <ListItem>Written in React.js Typescript using the <Link href='https://mui.com' target='_blank'>Material UI library</Link></ListItem>
                    <ListItem>Pushed to a <Link href={'https://github.com/JacobWG/portfolio'} target={'_blank'}>public GitHub repository</Link></ListItem>
                    <ListItem>Deployed automatically on AWS Amplify</ListItem>
                </List>
            </Box>
        </>
    )
}