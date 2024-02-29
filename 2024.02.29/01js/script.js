// 구조분해할당
// 프로젝트가 커질수록 JS파일 모듈화 사용 빈번
// 모듈 > 객체 혹은 배열 > 값 변수 할당 > 찾아와야 함

const fruits = ["사과", "복숭아"];

// const apple = fruits[0]
// const peach = fruits[1]

const [apple, peach] = fruits;
console.log(apple, peach);

// const [spring, fall] = ["봄", "여름", "가을", "겨울"];
// console.log(spring, fall);

// const [teacher, ...students] = ["kwon", "yun", "lee", "choi"];
// console.log(`선생님: ${teacher} 학생 : ${students}`);

// const member = {
//   name: "kwon",
//   age: 24,
// };

// const name = member.name;
// const age = member.age;
// console.log(name, age);

//변수의 이름을 바꾸고 싶을 때 (:바꾸고 싶은 변수명)
// const { name: userName, age } = member;
// console.log(userName, age);

//배열 메서드 심화
// map() /filter() / reduce()
// 원본 데이터는 바뀌지 않음
//

// map()
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// let newNumbers = numbers.map((number) => number * 2);
// console.log(newNumbers);

// let newNumbers2 = numbers.map((number, index) => index + number * 3);
// console.log(newNumbers2);

//filter()
// const scores = [50, 35, 64, 88, 45, 92];
// let highScores = scores.filter((score, index) => {
//   if (score > 85) {
//     console.log(`index : ${index}, score : ${score}`);
//   }
// });

//reduce() : 누산기
// reduce(콜백함수(누산기, 현재값, 인덱스, 원래배열), 초기값)

// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.reduce((total, current) => total + current, 0);
// console.log(result);

let bag = new Map();
bag.set("color", "red");
console.log(bag);

const myCup = new Map([
  ["color", "red"],
  ["havhandle", true],
  ["material", "ceramic"],
  ["capacity", "30ml"],
]);

// console.log(myCup);

// 메서드 체이닝 : 1개의 객체에 마치 체인처럼 복수의 멧드 함수를 연달아서 사용하는 모습
// bag.set("type", "mini");
// bag.set("perpose", "daily");

// bag.set("type", "mini").set("perpose", "daily");
// console.log(bag);

//
console.log(bag.size);
console.log(bag.get("color"));
console.log(bag.has("color"));
console.log(bag.delete("type"));
console.log(bag.clear());
console.log(bag);

console.log(myCup.keys());

for (let key of myCup.keys()) {
  console.log(key);
}
for (let key of myCup.values()) {
  console.log(key);
}

let numSet1 = new Set();
numSet1.add("one").add("two");
console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);
console.log(numSet2);

let students = new Set();
console.log(students);
students.add("윤영은");
students.add("권민주");
students.add("유민상");
console.log(students);

console.log(students.has("홍길동"));
console.log(students.delete("권민주"));
console.log(students);
students.clear();
console.log(students);