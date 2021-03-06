export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: string): T[K] => {
    return this.data[key];
  };

  set = (data: T): void => {
    Object.assign(this.data, data);
  };

  getAll(): T {
    return this.data;
  }
}
