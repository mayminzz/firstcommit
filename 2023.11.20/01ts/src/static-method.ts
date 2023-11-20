// class 생성자를 사용할 때 정적인 요소에 기능을 추가할 수 있었다!

// class A {
//   initValue = 1;
// }

// let initVal = new A();
// let result = initVal.initValue;
// console.log(result);

// class A {
//   static initValue = 1;
// }
// let initVal = A.initValue;
// console.log(initVal);

// static을 정적으로 바꾸어주는 키워드: 프로토타입을 거치지 않아도 다이렉트로 가져와서 쓸수 있음

// 반환값이 문자열이 붙었으니 타입정의가 필요하다!!!! 써주는게 FM
class C {
  static WhoAreYou(): string {
    return "I'm class C";
  }
}
console.log(C.WhoAreYou());

class D {
  static WhoAreYou(): string {
    return "I'm class D";
  }
}
console.log(D.WhoAreYou());


