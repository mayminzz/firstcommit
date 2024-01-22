import {
  FirstOrderFunc,
  SecondOrderFunc,
  ThirdOrderFunc,
} from "./function-signiture";

export const add3: ThirdOrderFunc<number, number> =
  (x: number): SecondOrderFunc<number, number> =>
  (y: number): FirstOrderFunc<number, number> =>
  (z: number): number =>
    x + y + z;

    // 고차함수의 마지막 실행함수의 최종 결과값을 반환하는 값 = 클로저라고 한다
    
