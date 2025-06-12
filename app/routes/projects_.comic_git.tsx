import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export default function ComicGit() {
    return (
        <Box className='article projects comicgit' sx={{ flexGrow: 1 }}>
            <Typography variant={'h1'}>comic_git</Typography>
            <Button variant="contained" href={'https://comic-git.gitbook.io/documentation'} target={'_blank'} sx={{mt:2}}>Link to Docs</Button>
            <Typography variant={'h2'}>Summary</Typography>
            <Typography>comic_git is an open source project started by Ryan Vilbrandt to provide a lightweight, free webcomic site hosted on GitHub Pages.</Typography>
            <Typography variant={'h2'}>Timeline</Typography>
            <List>
                <ListItem>
                    2019: I was briefly involved to create the initial documentation on a volunteer basis.
                </ListItem>
                <ListItem>
                    2019-2025: Ryan continued to add to the documentation while developing the app. He also migrated the documentation
                    from GitHub's built-in wiki to Gitbook to provide better collaboration and version control.
                </ListItem>
                <ListItem>
                    2025: In preparation for the 1.0 launch, Ryan contracted my services to update the documentation
                    with the new features implemented in 1.0 and edit the overall manual for clarity and ease of access.
                </ListItem>
            </List>
            <Typography variant={'h2'}>Duration of project</Typography>
            <Typography>Total time for the project spanned 16 hours of work over two weeks.</Typography>
            <Typography variant={'h2'}>Audience</Typography>
            <Typography>
                comic_git and its documentation are aimed at artists who may not have the necessary knowledge to design or host their own website.
                It tries to strike a balance between user-friendliness and high customization. As such, the documentation
                is constructed to provide beginners with the base essentials to get their website running, with more
                advanced topics signposted with the necessary skillsets to use them.
            </Typography>
        </Box>
    )
}