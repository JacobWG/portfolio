import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import type { TooltipProps } from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'rgb(0, 0, 0)',
        color: '#fff',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

export default function InAppHelp() {
    return (
        <Box className='article projects inapphelp' sx={{ flexGrow: 1 }}>
            <Typography variant={'h1'}>In-app Help</Typography>
            <Alert severity={'info'} sx={{mt: 2}}>
                The work done for this project was for Ground Traffic Control, the Zonar customer web portal, so no link is available.
                Additionally, we were in the middle of internal beta testing when the reduction in force occurred,
                affecting all involved stakeholders for this project, so the project never reached full implementation.
            </Alert>
            <Typography variant={'h2'}>Situation</Typography>
            <Typography>
                During development of Ground Traffic Control (GTC), Engineering added a link to
                the <Link href={'https://support.zonarsystems.net'} target={'_blank'}>Zonar support site</Link> in GTC's
                sidebar. However, the link not only took users away from GTC, but it opened the support site in the
                same tab, interrupting or even invalidating the user's work.
            </Typography>
            <Typography variant={'h2'}>Task</Typography>
            <Typography>
                Both the UX and Technical Writing teams agreed that this was extremely poor user experience and began to
                collaborate to develop a solution to provide user-friendly documentation.
            </Typography>
            <Typography variant={'h3'}>Challenges</Typography>
            <Typography>
                Engineering was heavily prioritizing actual GTC functionality and reaching MVP status with multiple GTC
                screens. As such, even putting in a ticket request to add <code>target = 'blank'</code> to the support
                site link proved to be difficult. Because of this, we focused on methods that could be implemented with
                a minimum of Engineering involvement.
            </Typography>
            <Typography variant={'h3'}>Resources</Typography>
            <Typography variant={'h4'}>Pendo</Typography>
            <Typography>
                While Engineering owned GTC itself, the UX team had access to Pendo. Pendo is software that acts as
                a wrapper around web and mobile apps, providing user analytics back to the company as well as allowing
                the company to inject overlays into the app. The primary use cases for this is guided tours, surveys, and marketing
                announcements. We believed we may be able to leverage it for delivering documentation.
            </Typography>
            <Typography variant={'h4'}>Zendesk</Typography>
            <Typography>
                My team owned the Zendesk instance which served as the platform for the support site.
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography variant={'caption'}>See <Link component={RouterLink} to={'/projects/zendesk'}>my
                                project write-up of Zendesk</Link> for more information.</Typography>
                        </React.Fragment>
                    }>
                    <Typography component={'span'}><sup>[1]</sup></Typography>
                </HtmlTooltip> Our primary concern was maintaining a single source of truth for both the support site and
                for any help provided directly in GTC. Zendesk offers a robust REST API which can deliver article data quickly.
            </Typography>
            <Typography variant={'h2'}>Action</Typography>
            <Typography>
                While investigating Pendo, I found it offered a display module that could accept and run arbitrary
                Javascript. I approached my and the UX managers with the idea to incorporate the single-sourcing code
                I had developed for use within Zendesk into this module. This would allow us to display support site
                content directly inside GTC in an overlay window, with no need for the user to leave GTC.
            </Typography>
            <Typography>
                With management approval, I began adapting the script for use in this context. By clicking a badge,
                the user is presented with the overlay window displaying the relevant article for the GTC screen they
                are currently on. This was accomplished by the Javascript program reading the current window URL, identifying
                the appropriate support article via a JSON lookup table, and retrieving the content through Zendesk's
                Show Article API.
            </Typography>
            <Typography>
                Once the content was retrievable, I then styled the overlay window to allow the user to easily close it,
                and also so the content is presentable -- the API call only retrieves the raw HTML, not the CSS associated with it.
                I also sanitized the links within the article, as Zendesk defaulted to relative URLs where able; these
                were changed to absolute URLs which opened in a new tab, so the user could drill down into support if they wished.
            </Typography>
            <Typography variant={'h2'}>Result</Typography>
            <Typography>
                I finished the code, and I and my manager were very pleased with the results, as was the UX team. The UX
                manager began identifying internal employees to participate in a beta test to check for anything we may
                have missed in the initial development. Unfortunately, the reduction in force occurred at this point, so we
                were unable to get employee or user feedback. However, I strongly believe this method of delivering
                support to users would have been well received and reduced friction in users obtaining self-help.
            </Typography>
        </Box>
    )
}