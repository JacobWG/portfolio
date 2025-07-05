import { faker } from '@faker-js/faker';
import { writeFileSync } from "fs";

interface License {
    number: string;
    state: string;
    expiry: string;
}

interface Driver {
    dbid: number;
    firstName: string;
    lastName: string;
    license: License;
}

interface Vehicle {
    dbid: number;
    assetId: string;
    year: number;
    make: string;
    model: string;
    vin:  string;
    fleet: string;
    trips: object;
}

interface Trip {
    startTime: Date;
    endTime: Date;
    startLoc: [number, number];
    endLoc: [number, number];
    miles: number;
}

function createDriver(i: number): Driver {
    return {
        dbid: i,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        license: {
            number: faker.string.numeric({ length: 9, allowLeadingZeros: false }),
            state: faker.helpers.arrayElement(['WA', 'CA', 'OR', 'ID']),
            expiry: faker.date.future({ years: 5 }).toLocaleDateString('en-US', {year: 'numeric', month:'numeric'})
        }
    }
}

function createVehicle(i: number): Vehicle {
    return {
        dbid: i,
        assetId: faker.string.alpha( {length: 1} ) + faker.string.numeric( {length: 4 } ),
        year: faker.number.int({ min: 2004, max: 2025 }),
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        vin:  faker.vehicle.vin(),
        fleet: faker.helpers.arrayElement(['North', 'South', 'East', 'West']),
        trips: []
    }
}

function distance (start: [number, number], end: [number, number]) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let c = Math.cos;
    let a = 0.5 - c((end[0] - start[0]) * p)/2 +
        c(start[0] * p) * c(end[0] * p) *
        (1 - c((end[1] - start[1]) * p))/2;

    return (12742 * Math.asin(Math.sqrt(a)))/1.609; // 2 * R; R = 6371 km
}

function createTripList(i: number) {
    let time = faker.date.recent({ days: 45 });
    let loc: [number, number] = faker.location.nearbyGPSCoordinate({origin: [41, -112], radius: 50});
    for (let j = 0; j < 25; j++) {
        vehicles[i].trips[j] = createTrip(time, loc);
        time = new Date(vehicles[i].trips[j].endTime.getTime() + (8 * 60 * 60000));
        loc = vehicles[i].trips[j].endLoc;
    }
}

function createTrip(time: Date, loc: [number, number]): Trip {
    const startTime = time;
    const endTime = faker.date.soon({ days: 1, refDate: startTime });
    const startLoc = loc;
    const endLoc = faker.location.nearbyGPSCoordinate({origin: startLoc, radius: 250});
    return {
        startTime: startTime,
        endTime: endTime,
        startLoc: startLoc,
        endLoc: endLoc,
        miles: distance(startLoc, endLoc)
    }
}

const database = {
    'driverList': [] as string[],
    'vehicleList': [] as string[],
};
const vehicles:any[] = [];
const drivers:any[] = [];

function createDriverList() {
    for (let i = 0; i < 20; i++) {
        drivers[i] = createDriver(i);
    }
    database['driverList'] = drivers;
}

function createVehicleList() {
    for (let i = 0; i < 20; i++) {
        vehicles[i] = createVehicle(i);
        createTripList(i);
    }
    database['vehicleList'] = vehicles;
}

console.log("Start Write")
createDriverList();
createVehicleList();
writeFileSync("fleetDB.json", JSON.stringify(database), {
    flag: "w"
});
console.log("End Write")