"use strict";
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
// const vehicle = kmToMiles(new RVehicle());
// const lcv = kmToMiles(new LCV());
kmToMiles({ run: 12 });
function rLogId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id: id, data: additionalData };
}
