
class Vehicle {
  constructor(name, price, consume) {
    // console.log("constructor...");
    this.name = name;
    this.price = price;
    this.consume = consume;
  }
}

let carOne = new Vehicle("Seat Ibiza", 10_000, 5.3);
let carTwo = new Vehicle("Kia", 9_500, 6.4);
let carThree = new Vehicle("Mercedes", 35_000, 8.5);

let vehicles = []; // object
vehicles.push(carOne)
vehicles.push(carTwo)
vehicles.push(carThree)
// 0: Vehicle {name: 'Seat Ibiza', price: 10000, consume: 5.3}
// 1: Vehicle {name: 'Kia', price: 9500, consume: 6.4}
// 2: Vehicle {name: 'Mercedes', price: 35000, consume: 8.5}

// Reverse sort vehicles by consume using a function 
vehicles.sort((v1, v2)=>v2.consume-v1.consume)
// 0: Vehicle {name: 'Mercedes', price: 35000, consume: 8.5}
// 1: Vehicle {name: 'Kia', price: 9500, consume: 6.4}
// 2: Vehicle {name: 'Seat Ibiza', price: 10000, consume: 5.3}