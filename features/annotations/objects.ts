const person = {
  name: "Alex",
  age: 10,
  coords: {
    lat: 15,
    lng: 64,
  },
  setAge(age: number) {
    this.age = age;
  },
};

const { age }: { age: number } = person;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = person;
