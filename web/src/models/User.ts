import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string; // ? used to make interface props optional
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection(
      rootUrl,
      (json: UserProps): User => User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.floor(Math.random() * 100);
    this.set({ age });
  }
}
