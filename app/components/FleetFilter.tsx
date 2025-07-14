import * as React from "react";
import dayjs from "dayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en.js'
import { vehicleList, driverList } from "~/routes/projects_.fleet_status";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function FleetFilter() {
    const today = dayjs();
    const defaultLastWeek = dayjs().subtract(7, 'days');
    let driverNames:string[] = [];
    let vehicleNames:string[] = [];
    let vehicleMakes:string[] = [];
    let vehicleFleets:string[] = [];
    driverList.forEach(driver => driverNames.push(driver.firstName + " " + driver.lastName));
    vehicleList.forEach(vehicle => {
        vehicleNames.push(vehicle.assetId);
        if (!vehicleFleets.includes(vehicle.fleet)) {
            vehicleFleets.push(vehicle.fleet);
        }
        if (!vehicleMakes.includes(vehicle.make)) {
            vehicleMakes.push(vehicle.make);
        }
    });
    driverNames.sort();
    vehicleNames.sort();
    vehicleFleets.sort();
    vehicleMakes.sort();
    return (
        <Box mb={2} sx={{display: 'flex', gap: '1rem'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker defaultValue={defaultLastWeek} label={"Start Date"} />
                <DatePicker defaultValue={today} label={"End Date"} />
            </LocalizationProvider>
            <Autocomplete
                options={driverNames}
                sx={{width: 225}}
                renderInput={(params) => <TextField {...params} label="Driver" />}
            />
            <Autocomplete
                options={vehicleNames}
                sx={{width: 100}}
                renderInput={(params) => <TextField {...params} label="Vehicle" />}
            />
            <Autocomplete
                options={vehicleMakes}
                sx={{width: 150}}
                renderInput={(params) => <TextField {...params} label="Make" />}
            />
            <Autocomplete
                options={vehicleFleets}
                sx={{width: 100}}
                renderInput={(params) => <TextField {...params} label="Fleet" />}
            />
        </Box>
    )
}