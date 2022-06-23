import axios, { AxiosPromise } from "axios";

interface HasID {
  id?: number;
}

export class ApiSync<T extends HasID> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    // If id exist, PUT
    // else POST
    const { id } = data;

    if (!id) {
      return axios.post(this.rootUrl, data);
    } else {
      return axios.put(`${this.rootUrl}/${id}`, data);
    }
  }
}
