let store = {drivers: [], passengers: [], trips: []};
let driverId = 0;

class Driver {
  constructor(name) {
      this.name = name;
      this.id = ++driverId;
      this.trips = [];
      store.drivers.push(this);
  }

  trips() {
    return this.trips
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
    this.trips = [];
    store.passengers.push(this);
  }
  trips() {
    return this.trips;
  }
}

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this);
    driver.trips.push(this);
    passenger.trips.push(this);
  }
  driver() {
    return this.driver
  }
  passenger() {
     return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId;
    })
  }
}
