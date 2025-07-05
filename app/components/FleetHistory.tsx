import * as React from 'react';
import Box from "@mui/material/Box";
import {BarChart} from "@mui/x-charts/BarChart";
import database from "~/components/fleetDB.json";

const { vehicleList } = database;

function getTrips() {
    let allTrips:any[] = [];
    for (let index = 0; index < vehicleList.length; index++) {
        vehicleList[index].trips.forEach((item) => {
            allTrips = [...allTrips, item];
        })
    }
    return allTrips;
}

function dateAggregator() {
    let trips:any[] = getTrips();
    let dates:any[] = [];
    for (let index = 0; index < trips.length; index++) {
        let dateTime = trips[index].startTime.split("T");
        dates = [...dates, dateTime[0]];
    }
    let uniqueDates:any[] = [];
    uniqueDates = dates.reduce(function(count, date) {
        count[date] = (count[date] || 0) + 1;
        return count;
    }, {});
    return Object.keys(uniqueDates).sort().reduce((obj, key) => {
        obj[key] = uniqueDates[key];
        return obj;
    }, {});
}

export default function FleetHistory() {
    let uDates = dateAggregator();
    let dates:string[] = Array.from(Object.keys(uDates));
    let counts:number[] = Array.from(Object.values(uDates));
    return (
        <Box mb={2} sx={{border: '2px solid', borderColor: 'divider'}}>
            <BarChart
                xAxis={[
                    {
                        data: dates,
                    }
                ]}
                series={[
                    {
                        data: counts,
                    }
                ]}
                height={500}
            />
        </Box>
    )
}