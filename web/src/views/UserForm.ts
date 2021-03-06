import { User } from "../models/User";
import { View } from "../models/View";
import { UserProps } from "../models/User";

export class UserForm extends View<User, UserProps> {
  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSaveModelClick = (): void => {
    this.model.save();
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveModelClick,
    };
  }

  template(): string {
    return `
            <div>
                <input placeholder=${this.model.get("name")} />
                <button class="set-name">Click Me</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
  }
}
