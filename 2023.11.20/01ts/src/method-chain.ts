// JS와 jQuery에서 1개의 객체에 여러함수를 연속적으로 사용할 수 있었다. => 메서드 체이닝 기법

// const body = document.querySelector("body");
// body.classList.toggle("active");

// class calculator {
//   // 오버로드
//   name: string;
//   age: number;
//   // 생성자 함수
//   constructor(name:string, age:number) {
//     this.name: name;
//     this.age: age;
//   }
// }

// 접근제어자: class생성자를 사용할 때, 해당 클래스의 속성값을 임의로 수정하지 못하도록 하기 위해 생성자함수 안에 할당된 인자값에 private 접근 제어자를 설정, 나중에 생성자 함수의 인자값을 수정할수 있도록 설정하려면, 퍼블릭이라는 접근제어자를 설정
// 접근제어자를 사용하면, class 생성자를 만들 때, 반드시 기입해야 하는 오버로드 내용 + 생성자 함수 안에 입력해야하는 instance객체 key와 value 설정도 생략 가능
export class Calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value;
    // this.value = value + value;

    return this;
  }
  multiply(value: number) {
    this.value *= value;
    // this.value = value * value;
    return this;
  }
}
