// const addNum = (a, b) => {
//   return a + b;
// };
// const result = addNum(1, 4);
// console.log(result);

const fruits = ["apple", "banana", "grape"];

const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

const result = addNum(1, 3, 5, 7);
console.log(result);

//setInterval =========
// const greeting = () => {
//   console.log("안녕하세요!");
// };

// setInterval(greeting, 2000);

//clearInterval =========
// let counter = 0;

// const hello = () => {
//   console.log("반갑습니다!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(hello);
//   }
// };
// setInterval(hello, 2000);

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const clock = () => {
  const now = new Date();
  hour.innerText = now.getHours();
  min.innerText = now.getMinutes();
  sec.innerText = now.getSeconds();
};
clock();

setInterval(clock, 1000);

const hello = () => {
  console.log("안녕하세요!");
};

setTimeout(hello, 3000);
