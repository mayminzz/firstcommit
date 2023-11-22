let array = new Array();
// array.push(1);
// array.push(2);
// array.push(3);

// console.log(array);

// 배열의 타입정의
let numArray: number[] = [1, 2, 3];
let strArry: string[] = ["Helo", "world"];
interface IPerson {
  name: string;
  age?: number;
}
type IPerson01 = {
  name: string;
  age?: number;
};
let personArray: IPerson01[] = [{ name: "Kwon" }, { name: "May", age: 24 }];

