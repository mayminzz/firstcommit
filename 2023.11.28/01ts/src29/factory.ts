// type test = { name: string };

// const create = <T>(type: T):T => new type();
// 제네릭 타입변수의 남발로 인한 "타입의 타입" 과 같은 부작용을 사전에 방지하기 위해서 타입제약이 생겨남
// 추상클래스
// const create = <T extends { new (): T }>(type: T): T => new type();

// new라는 예약어를 사용해서 클래스 생성자를 통한 프로토타입의 객체와 인스턴스타입의 객체를 생성하고자 할 때, 만약 인자값을 전달해야하는 상황이 발생한다면?
export const create = <T>(type: { new (...args: any): T }, ...args: any): T =>
  new type(...args);

  // ESM 문법 올해 7월 업데이트 => 기존 문법: 함수 안에 인자값으로 들어오는 매개변수가 전개연산자 구문의 경우 별도의 타잊 지정 없이도 가능
  // 1. 무조건 전개연산자구문은 배열 형식의 타입을 가져가야 한다. => 배열타입
  // 2
  // 3.