interface RVehicle {
    run: number;
}

function kmToMiles<T extends RVehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}

interface LCV extends RVehicle {
    capacity: number;
}

// const vehicle = kmToMiles(new RVehicle());
// const lcv = kmToMiles(new LCV());
kmToMiles({ run: 12});

function rLogId<T extends string | number, Y>(id: T,  additionalData: Y): { id: T, data: Y} {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}