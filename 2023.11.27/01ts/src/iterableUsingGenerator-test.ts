import { IterableUsingGenerator } from "./iterableUsingGenerator";

const array = [1, 2, 3];
const test = new IterableUsingGenerator(array);
for (let item of test) {
  console.log(item);
}

// 우리는 지금까지 클래스 생성자를 활용해서 이터러블한 객체를 만들었고, 이 이터러블한 객체를 만들기 위해서 제너레이터 함수를 사용 => 이틀의 타입을 정의하기 위해서 제네릭 인터페이스라는 개념을 활용