// import { User } from "./models/User";
// import { UserEdit } from "./views/UserEdit";
// import { Collection } from "./models/Collection";
import { UserForm } from "./views/UserForm";
import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
// const user = User.buildUser({ name: "Name", age: 20 });

// const root = document.getElementById("root");

// const userEdit = new UserEdit(root as Element, user);

// userEdit.render();

// console.log(userEdit);

// const collection = User.buildUserCollection();

// collection.on("fetch", () => {
//   console.log(collection);
// });

// collection.fetch();

// const user = User.buildUser({ id: 1 });

// // user.fetch();
// // user.save();

// user.on("change", () => {
//   console.log(user);
// });

// user.fetch();

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
