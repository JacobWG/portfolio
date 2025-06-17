import React from 'react';
import { Accordion as BaseAccordion, AccordionSummary as BaseSummary, AccordionDetails as BaseDetails } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface AccordionProps {
    id?: string;
    title: string;
    children?: React.ReactNode;
}

export default function Accordion({ id, title, children }: AccordionProps) {
    return (
        <BaseAccordion id={id} sx={{width: {lg: '75%', xl: '50%'}}}>
            <BaseSummary expandIcon={<ExpandMoreIcon />}>
                <Typography component='span'>{title}</Typography>
            </BaseSummary>
            <BaseDetails>
                {children}
            </BaseDetails>
        </BaseAccordion>
    )
}