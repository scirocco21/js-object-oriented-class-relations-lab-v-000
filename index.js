let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;

class Driver {
  constructor(name) {
      this.name = name;
      this.id = ++driverId;
      this.tripsArray = [];
      store.drivers.push(this);
  }

  trips() {
    return this.tripsArray
  }
  passengers() {
    let passengersIds = [];
    let passengers = [];

    this.tripsArray.forEach(trip => {
      passengersIds.push(trip.passengerId);
    })

    store.passengers.forEach(passenger => {
      if (passengersIds.includes(passenger.id)) {
        passengers.push(passenger)
      }
    })
  return passengers;
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    this.tripsArray = [];
    store.passengers.push(this);
  }
  trips() {
    return this.tripsArray;
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this);

    if (driver) {
      driver.tripsArray.push(this);
    }
    if (passenger) {
      passenger.tripsArray.push(this);
    }
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }
  passenger() {
     return store.passengers.find(passenger => {
       return passenger.id === this.passengerId;
     })
  }
}
