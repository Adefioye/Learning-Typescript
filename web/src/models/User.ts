
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string; // ? used to make interface props optional
  age?: number;
}

const URL = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(newData: UserProps): void {
    Object.assign(this.data, newData);
  }
}
