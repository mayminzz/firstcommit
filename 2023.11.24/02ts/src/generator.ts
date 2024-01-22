import { nextTick } from "process";

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
//  제너레이터 함수 => 이터러블 객체에서 가용할 수 있는 next()메서드 함수를 사용할 수 있다.
let g1 = gen();
console.log(g1);

let g2 = gen();
for (let i of g2) {
  console.log(i);
}

// 복습 내용
// JS에서 이터러블 객체가 무엇인지
// 이터러블 객ㅊ[ > 이터레이터 객체 심볼키
// 이너테리터 객체 안에 담갸 있]
