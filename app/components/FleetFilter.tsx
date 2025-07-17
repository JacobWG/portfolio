import * as React from "react";
import dayjs from "dayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en.js'
import { vehicleList, driverList } from "~/routes/projects_.fleet_status";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function applyFilters(filters:any) {
    let filteredData = [...vehicleList];
    if (filters.driver.length > 0) {
        let driverId:number = -1;
        const driverSplitName:[string, string] = filters.driver.split(" ");
        for (let i = 0; i < driverList.length; i++) {
            if (driverList[i].firstName == driverSplitName[0] && driverList[i].lastName == driverSplitName[1]) {
                driverId = driverList[i].dbid;
                break;
            }
        }
        filteredData.filter((vehicle) => vehicle.dbid == driverId);
    }
    if (filters.vehicle.length > 0) {
        filteredData.filter((vehicle) => vehicle.assetId == filters.vehicle);
    }
    if (filters.make.length > 0) {
        filteredData.filter((vehicle) => vehicle.make == filters.make);
    }
    if (filters.fleet.length > 0) {
        filteredData.filter((vehicle) => vehicle.fleet == filters.fleet);
    }
    filteredData.forEach((vehicle) => {
        vehicle.trips.filter((trip) => trip.startTime > filters.startTime && trip.endTime < filters.endTime);
    })
    return filteredData;
}

export default function FleetFilter({sendDataUp}) {
    const today = dayjs();
    const defaultLastWeek = dayjs().subtract(7, 'days');
    const [filters, setFilters] = React.useState({
        startDate: defaultLastWeek.toString(),
        endDate: today.toString(),
        vehicle: "",
        driver: "",
        make: "",
        fleet: ""
    });

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

    function handleClick() {
        sendDataUp(applyFilters(filters));
    }

    return (
        <Box mb={2} sx={{display: 'flex', gap: '1rem'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    defaultValue={defaultLastWeek}
                    label={"Start Date"}
                    onChange={(newDate: any) => setFilters({...filters, startDate: newDate.toString()})}
                />
                <DatePicker
                    defaultValue={today}
                    label={"End Date"}
                    onChange={(newDate: any) => setFilters({...filters, endDate: newDate.toString()})}
                />
            </LocalizationProvider>
            <Autocomplete
                options={driverNames}
                sx={{width: 225}}
                onChange={(driver: any) => setFilters({...filters, driver: driver})}
                renderInput={(params) => <TextField {...params} label="Driver" />}
            />
            <Autocomplete
                options={vehicleNames}
                sx={{width: 100}}
                onChange={(vehicle: any) => setFilters({...filters, vehicle: vehicle})}
                renderInput={(params) => <TextField {...params} label="Vehicle" />}
            />
            <Autocomplete
                options={vehicleMakes}
                sx={{width: 150}}
                onChange={(make: any) => setFilters({...filters, make: make})}
                renderInput={(params) => <TextField {...params} label="Make" />}
            />
            <Autocomplete
                options={vehicleFleets}
                sx={{width: 100}}
                onChange={(fleet: any) => setFilters({...filters, fleet: fleet})}
                renderInput={(params) => <TextField {...params} label="Fleet" />}
            />
            <Button variant={'contained'} onClick={handleClick}>Apply</Button>
        </Box>
    )
}