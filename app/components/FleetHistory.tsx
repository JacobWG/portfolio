import * as React from 'react';
import Box from "@mui/material/Box";
import {BarChart} from "@mui/x-charts/BarChart";

function getTrips(dataset:any) {
    let allTrips:any[] = [];
    for (let index = 0; index < dataset.length; index++) {
        dataset[index].trips.forEach((item:any) => {
            allTrips = [...allTrips, item];
        })
    }
    return allTrips;
}

function dateAggregator(dataset:any) {
    let trips:any[] = getTrips(dataset);
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

export default function FleetHistory({dataset}) {
    let uDates = dateAggregator(dataset);
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