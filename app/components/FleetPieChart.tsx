import * as React from 'react';
import Box from "@mui/material/Box";
import {PieChart} from "@mui/x-charts/PieChart";

function fleetAggregate(dataset: any) {
    let fleetMileage:Map<string, number> =  new Map();
    for (let index:number = 0; index < dataset.length; index++) {
        let fleet:string = dataset[index].fleet;
        let totalMiles:number|undefined = fleetMileage.has(fleet) ? fleetMileage.get(fleet) : 0;
        for (let j:number = 0; j < dataset[index].trips.length; j++) {
            totalMiles = totalMiles + dataset[index].trips[j].miles;
        }
        fleetMileage.set(fleet, totalMiles!);
    }
    return fleetMileage;
}

export default function FleetPieChart({dataset}) {
    let fleetMileage:any[] = [];
    fleetAggregate(dataset).forEach((value, key) => fleetMileage.push({'value': value.toFixed(2), 'label': key}));
    return (
        <Box mb={2} sx={{border: '2px solid', borderColor: 'divider', flexGrow: 1}}>
            <PieChart
                series={[
                    {
                        data: [
                            ...fleetMileage
                        ]
                    }
                ]}
                height={400}
            />
        </Box>
    )
}