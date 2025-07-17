import * as React from "react";
import dayjs from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import 'dayjs/locale/en.js'
import { vehicleList, driverList } from "~/routes/projects_.fleet_status";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

function applyFilters(filters:filterProps) {
    let filteredData = structuredClone(vehicleList);
    if (filters.driver != null) {
        let driverId:number = -1;
        const driverSplitName:string[] = filters.driver.split(" ");
        for (let i = 0; i < driverList.length; i++) {
            if (driverList[i].firstName == driverSplitName[0] && driverList[i].lastName == driverSplitName[1]) {
                driverId = driverList[i].dbid;
                break;
            }
        }
        filteredData = filteredData.filter((vehicle) => vehicle.dbid === driverId);
        console.log(filteredData);
    }
    if (filters.vehicle != null) {
        filteredData = filteredData.filter((vehicle) => vehicle.assetId == filters.vehicle);
    }
    if (filters.make != null) {
        filteredData = filteredData.filter((vehicle) => vehicle.make == filters.make);
    }
    if (filters.fleet != null) {
        filteredData = filteredData.filter((vehicle) => vehicle.fleet == filters.fleet);
    }
    filteredData.forEach((vehicle) => {
        vehicle.trips = vehicle.trips.filter((trip) => dayjs(trip.startTime).isSameOrAfter(dayjs(filters.startDate)) && dayjs(trip.endTime).isSameOrBefore(dayjs(filters.endDate)));
    })
    return filteredData;
}

interface filterProps {
    startDate: string,
    endDate: string,
    vehicle: string | null,
    driver: string | null,
    make: string | null,
    fleet: string | null
}

export default function FleetFilter({sendDataUp}) {
    const today = dayjs();
    const defaultLastWeek = dayjs().subtract(7, 'days');
    const defaultFilters:filterProps = {
        startDate: defaultLastWeek.toString(),
        endDate: today.toString(),
        vehicle: null,
        driver: null,
        make: null,
        fleet: null
    }

    const [filters, setFilters] = React.useState(defaultFilters);

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
        console.log(filters);
        const data = applyFilters(filters);
        sendDataUp(data);
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
                onChange={(e, value) => setFilters({...filters, driver: value})}
                renderInput={(params) => <TextField {...params} label="Driver" />}
            />
            <Autocomplete
                options={vehicleNames}
                sx={{width: 100}}
                onChange={(e, value) => setFilters({...filters, vehicle: value})}
                renderInput={(params) => <TextField {...params} label="Vehicle" />}
            />
            <Autocomplete
                options={vehicleMakes}
                sx={{width: 150}}
                onChange={(e, value) => setFilters({...filters, make: value})}
                renderInput={(params) => <TextField {...params} label="Make" />}
            />
            <Autocomplete
                options={vehicleFleets}
                sx={{width: 100}}
                onChange={(e, value) => setFilters({...filters, fleet: value})}
                renderInput={(params) => <TextField {...params} label="Fleet" />}
            />
            <Button variant={'contained'} onClick={handleClick}>Apply</Button>
        </Box>
    )
}