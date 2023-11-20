type Person = {
  name: string;
  age: number;
};

// 객체가 매개변수가 될 수 있다.
const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`);
printPerson({ name: "Kwon", age: 10 });

// 객체는 key와 value로 구성된 property(속성)들로 이루어져 있다.

// const makeObject = (key: string, value: string) => {
//   return { [key]: value };
// };

type keyType = {
  [key: string]: string;
};

// ★★ 안에 들어가는 매개변수,  반환한 값에 대한 정의
const makeObject = (key: string, value: string): keyType => ({ [key]: value });
console.log(makeObject("name", "KWON"));

// class생성자도 결국 constructure라는 생성자함수를 가지고 있다. 
// constructure 생성자함수 타입 정의는 어떻게 할거냐??


