import { arrayLength, isEmpty } from "./arrayLength";

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "world"];

interface IPerson {
  name: string;
  age?: number;
}

let personArray: IPerson[] = [
  { name: "jack", age: 33 },
  { name: "jane", age: 29 },
];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([2])
);
