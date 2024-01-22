// 구조분해할당
const fruits = ["사과", "복숭아"];
// const apple = fruits[0];
// const peach = fruits[1];

const [apple, peach] = fruits;
console.log(apple, peach);

let [spring, , fall] = ["봄", "여름", "가을", "겨울"];
console.log(spring, fall);

// 전개연산자
let arr = ["kim", "park", "lee", "choi"];

let [teacher, ...students] = arr;
console.log(teacher, students);

const member = {
  name: "park",
  age: 25,
};

let { name, age } = member;
console.log(name, age);

// 중첩객체 구조분해할당
const student01 = {
  name01: "권민주",
  score: {
    history: 85,
    science: 94,
  },
  friends: ["kim", "lee", "park"],
};

let {
  name01,
  score: { history, science },
  friends: [f1, f2, f3],
} = student01;

console.log(name01, history, f3);

