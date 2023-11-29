import { Fish, Bird } from "./BirdAndFish";

// 타입스크립트에서 타입에 대한 정의를 할 때, 조건에 따른 타입 정의를 해야할 필요가 있을 때가 있다. 
// 타입 가드라는 기능을 사용해야 하는데 객체 instanceof 타입
// 객체 as 타입(타입 선언)
// 객체 is 타입(is 연산자를 사용해서 타입가드를 주는 경우)
export const isFlyable = (o: Bird | Fish): o is Bird => {
  return o instanceof Bird;
};
