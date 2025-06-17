import * as React from 'react';
import {Refractor, registerLanguage} from 'react-refractor';
import js from 'refractor/lang/javascript.js';
import "../tomorrow.css"

registerLanguage(js)

interface CBlockProps {
    text: string;
    language?: string;
}

export default function CodeBlock({ text }: CBlockProps) {
    return (
        <Refractor
            value={text}
            language={'js'}
        />
    )
}