import * as React from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import { type GridColDef } from '@mui/x-data-grid';
import { driverList } from "~/routes/projects_.fleet_status";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const columns: GridColDef[] = [
    {field: 'vehicleName', headerName: 'Vehicle Name', flex: 0.5},
    {field: 'driver', headerName: 'Driver', flex: 0.5},
    {field: 'fleet', headerName: 'Fleet', flex: 0.5},
    {field: 'tripStart', headerName: 'Trip Start', flex: 1},
    {field: 'tripEnd', headerName: 'Trip End', flex: 1},
    {field: 'distance', headerName: 'Distance (Mi)', valueFormatter: (value: number) => {return `${value.toFixed(2)}`}, flex: 0.5},
];

function DataSort(dataset:any) {
    let rows: any[] = [];
    let rowId: number = 1;
    let tz = dayjs.tz.guess();
    for (let i = 0; i < dataset.length; i++) {
        for (let j = 0; j < dataset[i].trips.length; j++) {
            let row = {
                id: rowId,
                vehicleName: dataset[i].assetId,
                driver: driverList[i].firstName +  ' ' + driverList[i].lastName,
                fleet: dataset[i].fleet,
                tripStart: dayjs(dataset[i].trips[j].startTime).tz(tz).format('MM-DD-YYYY h:mm:ss A z'),
                tripEnd: dayjs(dataset[i].trips[j].endTime).tz(tz).format('MM-DD-YYYY h:mm:ss A z'),
                distance: dataset[i].trips[j].miles,
            }
            rows = [...rows, row];
            rowId++;
        }
    }
    return rows;
}

export default function FleetTable({dataset}:any) {
    let rows = DataSort(dataset);
    return (
        <Box sx={{height: '500px'}}>
            <DataGrid
                columns={columns}
                rows={rows}
                initialState={{
                    sorting: {
                        sortModel: [{field: 'tripStart', sort: 'desc'}],
                    }
                }}
                slotProps={{
                    loadingOverlay: {
                        variant: 'skeleton',
                        noRowsVariant: 'skeleton',
                    }
                }}
            />
        </Box>
    )
}