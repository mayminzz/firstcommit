// js 심벌 => 객체를 생성하는데 있어서 유일한 객체 프로퍼티키를 만들고 관리하고 싶을 때

let var1 = Symbol();
let var2 = Symbol();
let result = var1 === var2;
console.log(result);

const member = {
  name: "park",
  [id]: 12345,
};
