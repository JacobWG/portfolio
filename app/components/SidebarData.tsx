import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArticleIcon from '@mui/icons-material/Article';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const SidebarRoutes = [
    {
        title: "Home",
        path: "/",
        icon: <HomeFilledIcon />,
        cName: "nav-text",
    },
    {
        title: "Resume",
        path: "/resume",
        icon: <ContactPageIcon />,
        cName: "nav-text",
    },
    {
        title: "Samples",
        path: "/samples",
        icon: <ArticleIcon />,
        cName: "nav-text",
    },
];

export const SidebarExternalLinks = [
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/jacob-w-gilbert/",
        icon: <LinkedInIcon />,
        cName: "nav-text top-link",
    },
    {
        title: "GitHub",
        path: "https://github.com/JacobWG/portfolio",
        icon: <GitHubIcon />,
        cName: "nav-text",
    },
    {
        title: "Email",
        path: "mailto:jacob.gilbert@gmail.com",
        icon: <EmailIcon />,
        cName: "nav-text",
    },
];