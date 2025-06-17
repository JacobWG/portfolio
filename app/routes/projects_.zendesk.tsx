import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import CodeBlock from '../components/CodeBlock';
import { Link as RouterLink } from 'react-router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Zendesk() {
    return (
        <Box className='article projects zendesk' sx={{ flexGrow: 1 }}>
            <Typography variant={'h1'}>Zendesk</Typography>
            <Button variant="contained" href={'https://support.zonarsystems.net/hc/en-us'} target={'_blank'} sx={{mt:2}}>Link to Website</Button>
            <Typography variant={'h2'}>Summary</Typography>
            <Typography>From 2018 to 2025, I took ownership of the Zendesk-based support center for Zonar Systems.
                The initial site design was completed in 2018 by an outside vendor. I continued to develop and iterate
                on the design, and the site as it is now is 90% my UI/UX work.
            </Typography>
            <Alert severity={"info"} sx={{width: 'auto'}}>Prior to working on Zendesk, I had minimal experience with HTML and no experience with CSS and Javascript. The knowledge I gained from developing the site enabled me to make this portfolio.</Alert>
            <Typography variant={'h2'}>Notable Features</Typography>
            <Typography>These UI/UX features were fully designed and added by me.</Typography>
            <Typography variant={'h3'}>Knowledge Base Structure</Typography>
            <Typography>The knowledge base was originally separated into the following categories:</Typography>
            <List>
                <ListItem><strong>Hardware</strong>: All documentation related to Zonar hardware.</ListItem>
                <ListItem><strong>Software</strong>: All documentation related to Zonar apps.</ListItem>
                <ListItem><strong>Ground Traffic Control</strong>: All documentation related to Ground Traffic Control, Zonar's foundation web portal.</ListItem>
            </List>
            <Typography>In 2023, I led the team in conceiving and orchestrating a full-scale revision of the site to a persona-based categorization:</Typography>
            <List>
                <ListItem><strong>Installation</strong>: All documentation necessary for <strong>installing</strong> Zonar hardware, to be used by mechanics.</ListItem>
                <ListItem><strong>User Guides</strong>: All documentation related to <strong>using</strong> Zonar hardware and software, to be used by drivers, dispatchers, and fleet administrators.</ListItem>
                <ListItem><strong>Ground Traffic Control</strong>: All documentation related to Ground Traffic Control, to be used by dispatchers and fleet administrators.</ListItem>
                <ListItem>
                    <strong>ELD</strong>: All documentation related to <Link href={'https://eld.fmcsa.dot.gov/'} target={'_blank'}>Electronic Logging Devices</Link> and the associated logging software,
                    to be used by interstate trucking companies and their drivers. This was originally located in Software, and was moved out both due to the persona re-categorization and the expanded role ELD played in Zonar's business.
                </ListItem>
            </List>
            <Typography>
                The intention behind this was to create a smoother user experience by creating a more intuitive flow.
                Unfortunately relevant KPIs were not tracked, however user satisfaction in informal surveys increased after the redesign.
            </Typography>
            <Typography variant={'h3'}>Iconography</Typography>
            <Typography>
                Within category and section pages, articles and sections are clearly marked with
                descriptive icons, providing a more intuitive browsing experience.
                <img src='/assets/zendesk01.png' alt='An image of links to sections and articles, showing a drill-down icon for sections and a page for articles.' />
            </Typography>
            <Typography variant={'h3'}>Internationalization</Typography>
            <Typography>
                While Zendesk provides in-built translation for articles, website text is not inherently
                supported. I moved all website text not in articles into <Link href={'https://support.zendesk.com/hc/en-us/articles/4408882999066-Providing-multiple-language-support-with-dynamic-content'} target={'_blank'}>dynamic content</Link>,
                making it possible to translate the full site into other languages. Although dynamic content is primarily intended for support ticket handling,
                the website templating can make use of it as well.
            </Typography>
            <Typography variant={'h3'}>Single-sourcing</Typography>
            <Typography>
                Zendesk introduced the ability to place articles in multiple sections last year,
                solving a necessary pain point. Before then, however, our team had a need to duplicate content while
                maintaining a single source of truth. I designed a Javascript function that makes a Zendesk API call
                to insert the text from one article into another based on HTML with matching IDs.
                <CodeBlock text={`if (typeof urls !== "undefined") {
    var currentUrlPath = window.location.pathname.split('/');
    var locale = currentUrlPath[2];
    var divs = document.querySelectorAll(".article-body div");
    for (var i = 0; i < divs.length; i++) {
        (function(i) {
            var sectionid = divs[i].getAttribute("id");
            if (sectionid in urls) {
                var url = 'https://support.zonarsystems.net/api/v2/help_center/' + locale + '/articles/' + urls[sectionid] + '.json';
                $.getJSON(url, function(data) {
                    var article = data.article.body;
                    var articleHTML = new DOMParser().parseFromString(article, "text/html")
                    var body = articleHTML.getElementById(sectionid).innerHTML;
                    document.getElementById(sectionid).innerHTML = body;
                });
            }
        })(i);
    }
}`
                    } />
            </Typography>
            <Typography>This code serves as the basis for the more powerful <Link component={RouterLink} to={'/projects/in_app_help'}>In-app Help</Link> which was implemented later.</Typography>
        </Box>
    )
}