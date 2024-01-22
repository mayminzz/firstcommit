// 전개연산자 or 전개구문
// 배열안에 각각의 아이템 값만 끄집어 오게 한다. 
// let fruits = ["apple", "banana", "grape", "pineapple", "peach"];
// console.log(fruits);
// console.log(...fruits);

// function addNum(a, b) {
//   return a + b;
// }
// console.log(addNum(1, 3, 5, 7));


//전개연산자는 배열안에 각각의 아이템 값만 끄집어 오게 한다. 
// 입력한 숫자만큼의 숫자가 다 들어오게 된다.  
// 썸에는 숫자들의 합산된 값이 들어가 있다. 
// addNum이 호출될때 sum의 값으로 반환하게 리턴문을 써줬다. 
function addNum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(addNum(1,3));
console.log(addNum(1,3,5,7));
