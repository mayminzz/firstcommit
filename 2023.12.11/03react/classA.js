// JS => class 공통된 형태를 띄고 있느 ㄴ객체를 보다 손쉽고, 효율적으로 생성하기 위해 사용

// const studentA = {
//   bane: "minju",
//   grade: "A+",
//   age: 24,
//   study() {
//     console.log("열심히 공부함")
//   },
//   intriduce() {
//     console.log("안녕하세요!")
//   }
// };
// const studentB = {
//   bane: "minsang",
//   grade: "C+",
//   age: 24,
//   study() {
//     console.log("최선을 다하는 인재")
//   },
//   intriduce() {
//     console.log("항사 감사합니다!")
//   }
// };
class Student {
  // field
  name;
  grade;
  age;
  // constructor:인자값!!
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // method
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log("안녕하세요");
  }
}
const studentA = new Student("Minju", "A+", 24);
// studentA: 인스턴스 객체(클래스 생성자를 통해서 탄생한 일종의 붕어빵)
// student 클래스 생성자 : 붕어빵 틀
// new student: 프로토타입 함수
// new student를 통해서 만들어지는 객체 => 프로토타입 객체
console.log(studentA);
console.log(studentA.study());
console.log(studentA.introduce());

class StudentDeveloper extends Student {
  // field
  favoriteSkill;

  // constructor
  constructor(name, grade, age, favoriteSkill) {
    // 그대로 사용하는 인자값을 그대로 가져온다는 의미
    super(name, grade, age)
    this.favoriteSkill = favoriteSkill;
  }
  // method
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}
const studentB = new StudentDeveloper("Jane", "B+", 20, "JS");
console.log(studentB);

// 접근제어자를 사용하면, 굳이 우리는 field를 사용하지 않고 생략해도 된다. 그리고 this를 활용한 객체의 kwy값 정의도 생략이 가능

// 접근제어자란?
// private, protected, public
