import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link, {type LinkProps } from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {
    Link as RouterLink,
    useLocation,
} from 'react-router'
import {SidebarRoutes} from "~/components/SidebarData";
import {SamplesRoutes} from "~/components/SamplesData";
import {ProjectsRoutes} from "~/components/ProjectsData";

const allRoutes = [...SidebarRoutes, ...SamplesRoutes, ...ProjectsRoutes];
const pathTitles = new Map(allRoutes.map(route => [route.path, route.title]));

interface LinkRouterProps extends LinkProps {
    to: string;
    replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
    return <Link {...props} component={RouterLink as any} />;
}

export default function BCToolbar() {
    const location =  useLocation();
    const pathNames = location.pathname.split("/").filter((x) => x);
    return (
        <Breadcrumbs sx={{textTransform: 'capitalize'}}>
            <LinkRouter underline="hover" color="inherit" to="/">
                Home
            </LinkRouter>
            {pathNames.map((value, index) => {
                const last = index === pathNames.length - 1;
                const to = `/${pathNames.slice(0, index + 1).join('/')}`;
                const pathTitle = pathTitles.get(to);

                return last ? (
                    <Typography key={index} sx={{ color: 'text.primary' }}>
                        {pathTitle}
                            </Typography>
                ) : (
                    <LinkRouter underline="hover" color="inherit" to={to} key={index}>
                        {pathTitle}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
}