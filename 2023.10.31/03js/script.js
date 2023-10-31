// ★ 구조 분해 할당
// 자바스크립트 고급스킬 ==> 모듈
// 레고 블록 쌓기

const fruits = ["사과", "복숭아"];
console.log(fruits);
// let apple = fruits[0];
// let peach = fruits[1];

let [apple, peach] = ["사과", "복숭아"];
console.log(apple);
console.log(peach);

let [spring, , fall] = ["봄", "여름", "가을", "겨울"];
console.log(spring);
console.log(fall);
// 변수명을 정의하지 않았기 때문에 없다.

let [teacher, ...students] = ["kim", "lee", "kown", "choi"];
console.log(teacher);
// ㅈ전개연산자를 활용함 배열형태로 가져온다.
console.log(students);

let x = 10;
let y = 20;
console.log(([x, y] = [y, x]));
// x는 y로 y는 x로 할당 가능
