const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ["brown", true, 40];
// pepsi[0] = 50; ## Type inference error appears

// Lets use Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const greenTea: Drink = ["green", false, 0];
const sprite: Drink = ["clear", true, 50];
