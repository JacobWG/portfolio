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
    let dateMileage:Map<string, number> =  new Map();
    for (let index:number = 0; index < trips.length; index++) {
        let dateTime:{} = trips[index].startTime.split('T');
        let date:string = dateTime[0];
        if (dateMileage.has(date)) {
            let newMiles:number = dateMileage.get(date) + trips[index].miles;
            dateMileage.set(date, newMiles);
        } else {
            dateMileage.set(date, trips[index].miles);
        }
    }
    console.log(dateMileage);
    return dateMileage;
}

export default function FleetHistory({dataset}) {
    let uDates:Map<string, number> = dateAggregator(dataset);
    let dates:string[] = Array.from(uDates.keys());
    let miles:number[] = Array.from(uDates.values());
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
                        data: miles,
                        valueFormatter: (value: number|null) => {if (value == null) {return ''} return `${value.toFixed(2)} mi`},
                    }
                ]}
                yAxis={[
                    {
                        label: "Total Miles",
                    }
                ]}
                height={500}
            />
        </Box>
    )
}