import * as React from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import "./app.css";
import Box from "@mui/material/Box";
import Paper from '@mui/material/Paper';
import BCToolbar from "~/components/BCToolbar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ResponsiveSidebar from "~/components/ResponsiveSidebar";

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

let defTheme = createTheme({
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
            lineHeight: 1.75,
            letterSpacing: "0em",
            fontWeight: 700
        },
        h4: {
            fontSize: "1.25rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em",
            fontWeight: 700
        }
    }
});

defTheme = responsiveFontSizes(defTheme);

export function Layout() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const drawerWidth = 175;

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
  return (
    <html lang="en">
      <head>
          <title>Jacob Gilbert's Portfolio</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Jacob Gilbert's Portfolio" />
          <meta property="og:description" content="A collection of projects and writing samples created by Jacob Gilbert." />
          <meta property="og:url" content="https://jacobwg.net" />
          <meta property="og:image" content="/assets/headshot.png" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme={defTheme}>
          <CssBaseline />
          <Box sx={{display:'flex'}}>
              <AppBar
                  id={'header'}
                  position="fixed"
                  sx={{
                      width: { sm: `calc(100% - ${drawerWidth}px)` },
                      ml: { sm: `${drawerWidth}px` },
                  }}
              >
                  <Toolbar>
                      <IconButton
                          color="inherit"
                          aria-label="open drawer"
                          edge="start"
                          onClick={handleDrawerToggle}
                          sx={{ mr: 2, display: { sm: 'none' } }}
                      >
                          <MenuIcon />
                      </IconButton>
                      <BCToolbar />
                  </Toolbar>
              </AppBar>
              <Box
                  component="nav"
                  sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                  <Drawer
                      variant="temporary"
                      open={mobileOpen}
                      onTransitionEnd={handleDrawerTransitionEnd}
                      onClose={handleDrawerClose}
                      sx={{
                          display: { xs: 'block', sm: 'none' },
                          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                      }}
                      slotProps={{
                          root: {
                              keepMounted: true, // Better open performance on mobile.
                          },
                      }}
                  >
                      <ResponsiveSidebar />
                  </Drawer>
                  <Drawer
                      variant="permanent"
                      sx={{
                          display: { xs: 'none', sm: 'block' },
                          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                      }}
                      open
                  >
                      <ResponsiveSidebar />
                  </Drawer>
              </Box>
              <Box id={'mainbody'} sx={{width: {xs: '100%', sm: `calc(100% - ${drawerWidth}px)`}}}>
                  <Toolbar/>
                  <Paper elevation={0}>
                      <Outlet />
                  </Paper>
              </Box>
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
