import { mergeObjects } from "./mergeObject";

interface INameable {
  name: string;
}

interface IAgable {
  age: number;
}

const nameObj: INameable = {
  name: "KMJ",
};
const ageObj: IAgable = {
  age: 24,
};

const nameAndAge: INameable & IAgable = mergeObjects(nameObj, ageObj);

console.log(nameAndAge);
