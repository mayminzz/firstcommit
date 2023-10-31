let num = parseInt(prompt("20이하 숫자를 입력해주세요!"));

let result = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(result(num));
