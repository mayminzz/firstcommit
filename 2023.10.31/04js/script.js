// const member = {
//   name: "kwon",
//   age: 24,
// };

// let name = member.name;
// console.log(name);
// 타입에 따라 받아오고자 하는 것도 그에 맞게 객체 면{} 배열이면[]

// 객체 축약법 *구조 분해할당 융합되어진 구조
// let { name, age } = member;
// console.log(name);
// console.log(age);


// const student = {
//   name: "권민주",
//   score: {
//     history: 85,
//     science: 94,
//   },
//   friends: ["Yoon", "lee", "park"],
// };

// let {
//   name,
//   score: { history, science },
//   friends: [f1, f2, f3],
// } = student;

// console.log(name);
// console.log(history);
// console.log(science);
// console.log(f1);
// console.log(f2);
// console.log(f3);
const student = {
  name:"권민주",
  score: {
    history: 97,
    science: 85,
  },
  friends:["영은", "하경", "혜린"],
};

let {name, score: {history, science}, friends:[f1,f2,f3]} = student;
console.log(name)
console.log(history)
console.log(science)
console.log(f1)
console.log(f2)
console.log(f3)