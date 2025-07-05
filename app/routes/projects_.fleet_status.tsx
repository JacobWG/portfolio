import * as React from 'react';
import database from "~/components/fleetDB.json";
import FleetTable from "~/components/FleetTable";
import FleetHistory from "~/components/FleetHistory";
import Box from '@mui/material/Box';

export const { driverList, vehicleList } = database;

export default function FleetStatus() {
    return (
        <Box m={"2rem auto"} width={"75%"}>
            <FleetHistory />
            <FleetTable/>
        </Box>
    )
}