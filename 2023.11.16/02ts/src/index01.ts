// // public, private : 접근 연산자

// abstract class person4 {
//   constructor(public theName: string, public theAge: number) {}
//   get name() {
//     return this.theName;
//   }
//   get age() {
//     return this.theAge;
//   }
// }

// class person7 extends person4 {
//   constructor(theName: string, theAge: number) {
//     super(theName, theAge);
//   }
// }
// const personT1 = new person7("Kwon", 20);
// console.log(personT1)

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}
class person5 extends AbstractPerson5 {
  constructor(public name: string, age: number) {
    super(age);
  }
}
let jack5 = new person5("jack", 32);
console.log(jack5);

class A {
  static initValue = 1;
  public initTarget = "test";
}
const test = new A();
const test01 = A.initValue;

console.log(test01);
// Q. class 생성자로 생성된 객체를 통해서만 반드시 객체 안에 포함된 값을 가져갈 수 있는 걸까?

class ClassExample {
  public _field: string;

  get field() {
    return this._field;
  }

  set field(theField: string) {
    this._field = theField;
  }

  public printField() {
    console.log(`field:${this._field} `);
  }
}
let ClassExampl01 = new ClassExample();
ClassExampl01._field = "hi";
let test07 = ClassExampl01.printField();
let test08 = ClassExampl01.field;
console.log(test07);
console.log(test08);
