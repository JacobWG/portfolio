import * as React from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import PermanentDrawerLeft from '~/components/Sidebar'
import type { Route } from "./+types/root";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Stack from '@mui/material/Stack';
import "./app.css";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import BCToolbar from "~/components/BCToolbar";
import {drawerWidth} from "~/components/Sidebar";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const defTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        h1: {
            fontSize: "3rem",
            lineHeight: 1.167,
            letterSpacing: "0em"
        },
        h2: {
            fontSize: "2.125rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em",
        },
        h3: {
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em"
        }
    }
});

export function Layout() {
  return (
    <html lang="en">
      <head>
        <title>Jacob Gilbert's Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={defTheme}>
          <CssBaseline />
          <Box sx={{display:'flex'}}>
              <PermanentDrawerLeft/>
              <Stack sx={{flexDirection:'column'}}>
                  <BCToolbar />
                  <Paper sx={{width: 'calc(100vw - 175)'}} elevation={0}>
                      <Box id={'mainbody'}>
                          <Outlet />
                      </Box>
                  </Paper>
              </Stack>
          </Box>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
      <Layout />
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
