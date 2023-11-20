// 반환값이 필요없다면 return문을 사용하지 않는다면 void
// const add1 = (a: number, b: number)=> void;
const add1 = (a: number, b: number) => a + b;

// 고차함수
const add2 =
  (a: number): ((arg0: number) => number) =>
  (b: number): number =>
    a + b;

const result = add2(1)(2);
console.log(result);
