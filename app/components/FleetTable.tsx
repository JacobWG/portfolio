import * as React from 'react';
import Box from "@mui/material/Box";
import { DataGrid } from '@mui/x-data-grid';
import { type GridColDef } from '@mui/x-data-grid';
import { driverList } from "~/routes/projects_.fleet_status";

const columns: GridColDef[] = [
    {field: 'vehicleName', headerName: 'Vehicle Name', flex: 0.5},
    {field: 'driver', headerName: 'Driver', flex: 0.5},
    {field: 'fleet', headerName: 'Fleet', flex: 0.5},
    {field: 'tripStart', headerName: 'Trip Start', flex: 1},
    {field: 'tripEnd', headerName: 'Trip End', flex: 1},
    {field: 'distance', headerName: 'Distance (Mi)', flex: 0.5},
];

function DataSort(dataset:any) {
    let rows: any[] = [];
    let rowId: number = 1;
    for (let i = 0; i < dataset.length; i++) {
        for (let j = 0; j < dataset[i].trips.length; j++) {
            let row = {
                id: rowId,
                vehicleName: dataset[i].assetId,
                driver: driverList[i].firstName +  ' ' + driverList[i].lastName,
                fleet: dataset[i].fleet,
                tripStart: dataset[i].trips[j].startTime,
                tripEnd: dataset[i].trips[j].endTime,
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