// 배열의 변칙성 메서드!
// 배열의 메서드 slice, slice => 규칙성 메서드..
// 변칙성 메서드 = 배열 자체의 속성을 변경

// map(), filter(), reduce()
// 2015년 이후ES6 문법 탄생

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// numbers 라는 배열 안에 있는 모든 아이템에 곱하기 2를 해서 신규배열을 만들어보세요!
// map은 콜백함수를 쓴다
let newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);

let newNumbers2 = numbers.map((number, index) => 
  index + number * 3);

console.log(newNumbers2);
