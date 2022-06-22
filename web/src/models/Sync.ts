import axios, { AxiosResponse } from "axios";

export class Sync {
  fetch() {
    axios
      .get(`${URL}/${this.get("id")}`)
      .then((response: AxiosResponse): void => console.log(response));
  }

  save(newData: UserProps): void {
    // If id exist, PUT
    // else POST
    const id = this.get("id");
    if (!id) {
      axios
        .post(`${URL}`, newData)
        .then((response: AxiosResponse): void => console.log(response));
    } else {
      axios
        .put(`${URL}/${id}`, newData)
        .then((response: AxiosResponse): void => console.log(response));
    }
  }
}
