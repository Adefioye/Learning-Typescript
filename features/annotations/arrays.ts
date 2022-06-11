// const carMakers = ["ford", "toyota", "chevy"]
const carMakers: string[] = [];

// const dates = [new Date(), new Date()];
const dates: Date[] = [];

// Declaration of multidimensional array
// const carsByMake = [["f150"], ["corolla"], ["camaro"]];
const carsByMake: string[][] = [];

// Helps to provide inference when accessing, removing elements in the array
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevents adding incompatible values into the array
// carMakers.push(30);

// Methods like map, forEach are accessible on Typed arrays
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
