let numArray: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "world"];

// interface IPerson {
//   name: string;
//   age?: number;
// }

type IPerson = {
  name: string;
  age?: number;
};

let personArray: IPerson[] = [{ name: "jack" }, { name: "minju", age: 24 }];
// 객체부터 정의 인터페이스 그리고 배열이기 때문에[]

// 실제현업에서는 객체의 타입 정의 80~90%는 인터페이스로 사용!
// 간혹type 별칭 사용
// 차입별칭과 인터페이스의 다른 차이점? 타입별칭의 경우 확장 개념이 없다. 그런데 인터페이스는 extends & inplement & abstract
