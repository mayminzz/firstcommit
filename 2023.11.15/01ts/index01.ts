// class 생성자 함수 public을 써준다.
// public을 쓰면 this.name = name; this.age = age; 안써도됨
class Person2 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

//  생성자 함수 Person2가 타입의 종류가 될 수 있다.
let jack2: Person2 = new Person2("jack", 25);
// jack2는 person2를 가져가는 인스턴스 객체가 됨
console.log(jack2);

// TS에서 생성자함수와 인터페이스를 결합해서 사용하는 방법
// 객체타입을 정의한 때 쓰는 interface
interface IPerson4 {
  name: string;
  age?: number;
}
// class Person4 implements IPerson4 {
//   constructor(public name: string, public age: number) {}
// }

// let jack4: IPerson4 = new Person4("KWON", 24);
// console.log(jack4);

