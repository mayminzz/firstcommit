const multiply = (result: number, val: number): number => result * val;
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reduce() 누산기

let tempResult = numbers
  .filter((val) => val % 2 != 0)
  .map((val) => val * val)
  .reduce(multiply, 1);

// sqrt 해당 값에 대한 제곱근을 반환
let result = Math.sqrt(tempResult);
console.log(result);
