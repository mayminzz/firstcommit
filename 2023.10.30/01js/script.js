/*// 배열
let season = [];
season[0] = "spring";
season[1] = "summer";
season[2] = "fall";
season[3] = "winter";
console.log(season);
*/
/*
let pets = ["dog", "cat", "parrot"];
console.log(pets);
*/
/*
let fruits = new Array("사과", "복숭아", "포도");
console.log(fruits);
*/
/*
let pets = ["dog", "cat", "parrot"];
console.log(pets[1]);
*/

let fruits = new Array("사과", "복숭아", "포도");
fruits[4] = "배";
console.log(fruits);

// for문과 친하다!!!
// length 5 / 0-4의 인덱스 값을 가짐
let colors = ["red", "green", "blue", "white", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 변칙성의 for문 배열도 결국엔 객체 하나씩 가져올 수 있는 매서드 함수 forEach
// 매개변수 혹은 인자값이 1개인 경우
let animals = ["lion", "bear", "bird"];
animals.forEach((/*본인의 배열 요소안의 아이템*/ animal) => {
  console.log(animal);
});

// 매개변수 혹은 인자값이 2개인 경우
animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});

// 매개변수 혹은 인자값이 3개인 경우
animals.forEach((animal, index, array) => {
  console.log(`[${array}] [${index}] : ${animal}`);
});

