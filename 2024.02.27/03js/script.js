let season = [];
console.log(typeof season);

season[0] = "Spring";
season[1] = "summer";
console.log(season);

const obj = new Object();
const fruits = new Array("사과", "복승아", "포도");
console.log(fruits);

//배열 => 반복문 || 반복문 => 배열
// while / do..while / for / for of / for in / forEach

// for
const colors = ["red", "green", "blue", "white", "black"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// forEach
const animals = ["lion", "bear", "rabbit"];
animals.forEach((animal) => {
  console.log(animal);
});

animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});

animals.forEach((animal, index, array) => {
  console.log(`[${array}][${index}] : ${animal}`)
})