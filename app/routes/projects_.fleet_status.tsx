import * as React from 'react';
import database from "~/components/fleetDB.json";
import FleetTable from "~/components/FleetTable";
import FleetHistory from "~/components/FleetHistory";
import FleetFilter from  "~/components/FleetFilter";
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export const { driverList, vehicleList } = database;

export default function FleetStatus() {
    const [open, setOpen] = React.useState(false);
    const [filteredData, setFilteredData] = React.useState<[]>([]);

    function getFilteredData(data:any) {
        setFilteredData(data);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box m={"2rem auto"} width={"75%"}>
            <Box>
                <Button variant={"contained"} onClick={handleClickOpen}>
                    App Demo Info
                </Button>
                <Dialog onClose={handleClose} aria-labelledby="dialog-title" id={"mock-data-info"} open={open}>
                    <DialogTitle id="dialog-title">
                        Single-Page App Demo
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            This single-page app demo shows a simple design for a fleet status dashboard, where
                            a fleet administrator might check how many miles a given segment, vehicle, or driver in their
                            fleet traveled in a given date range.
                        </Typography>
                        <Typography gutterBottom>
                            The data being used is a static database of 20 drivers and 20 vehicles with 25 trips
                            each.
                            All trips take place between May 18, 2025 and July 15, 2025 inclusive. The data was generated
                            using <Link href={"https://fakerjs.dev/"} target={"_blank"}>Faker.js</Link>.
                        </Typography>
                        <List>
                            <ListItem>
                                <Link href={"https://github.com/JacobWG/portfolio/blob/main/app/components/fleetDB.json"}>
                                    View fleet database on GitHub
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href={"https://github.com/JacobWG/portfolio/blob/main/app/components/fleetDataGenerator.ts"}>
                                    View fleet generator script on GitHub
                                </Link>
                            </ListItem>
                        </List>
                        <Divider />
                        <Typography variant={"h4"} mt={2}>Planned future updates</Typography>
                        <List>
                            <ListItem>Adjustments to how the data is displayed and arrangement of elements.</ListItem>
                            <ListItem>Pie chart showing mileage share per fleet segment</ListItem>
                            <ListItem>Streaming data for real-time updates (still mock data)</ListItem>
                        </List>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
            <Box mt={2}>
                <FleetFilter sendDataUp={getFilteredData} />
                <FleetHistory dataset={filteredData} />
                <FleetTable dataset={filteredData} />
            </Box>
        </Box>
    )
}