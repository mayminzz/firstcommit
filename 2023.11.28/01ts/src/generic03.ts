interface obj {
  name: string;
  age: number;
}

const obj01: obj = {
  name: "KWON",
  age: 24,
};

// 제네릭 인터페이스
// interface IValuable<T> {
//   value: T;
// }

// 제네릭 총집합
// 1) 제네릭 함수구문
function identity<T>(arg0: T): T {
  return arg0;
}
// 2) 제네릭 타입 별칭
type IValuable<T> = {
  value: T;
};

// 3)제네릭 클래스 구문
class Valuable<T> {
  // 오버로드, 생성자 함수 생략하는 방법? => 접근 제어자( public, private)
  constructor(public value: T) {}
}

// 4) 화살표함수 제네릭 함수 구문
const identity01 = <T>(arg0: T): T => {
  return arg0;
};
