let apple: number = 5;
apple = 10;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "blue", "green"];
let myNumbers: number[] = [1, 3, 6];
let myBooleans: boolean[] = [true, false, true];

// Class
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 7,
  y: 10,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) When a variable/ function returns a type any
const json = '{"x": 10, "y": 55}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // This returns {x: 10, y: 55}

// coordinates.ssssjjjjjjjjjjjj // Typescript unable to catch unknown property on coordinates variable
// 2) When a variable is declared on one line and initialized in another line

const newColors = ["red", "green", "blue"];
let foundColor: boolean;

for (let i = 0; i < newColors.length; i++) {
  if (newColors[i] == "green") {
    foundColor = true;
  }
}

// 3) Variables whose type cannot be inferred
const numbers = [-12, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
