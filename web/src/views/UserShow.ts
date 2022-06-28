import { View } from "../models/View";
import { User, UserProps } from "../models/User";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
            <div>
                <h1>User details</h1>
                <p>User Name: ${this.model.get("name")}</p>
                <p>User Age: ${this.model.get("age")}</p>
            </div>
        
        `;
  }
}
