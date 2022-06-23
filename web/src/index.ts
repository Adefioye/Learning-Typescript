import { User } from "./models/User";

const user = User.buildUser({ id: 1 });

// user.fetch();
// user.save();
user.fetch();

user.on("change", () => {
  console.log(user);
});
console.log(user.get("name"));

// user.save({name: "felix", age: 9999})

// user.save({ name: "koko", age: 55 });

// user.on("change", () => {
//   console.log("Change #1");
// });
// user.on("change", () => {
//   console.log("Change #2");
// });
// user.on("mouseover", () => {
//   console.log("MouseOver triggered");
// });

// user.trigger("change");

// user.trigger("mouseover");

// console.log(user);

// user.set({ name: "fawaz" });
// console.log(user.get("name"));
// console.log(user.get("age"));
