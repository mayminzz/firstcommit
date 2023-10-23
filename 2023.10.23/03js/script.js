const f = document.querySelector("#number1");
const s = document.querySelector("#number2");
const btn = document.querySelector("button");
const result = document.querySelector("#result");
// console.log(f);

const getGCD = (f, s) => {
  let max = f > s ? f : s;
  let GCD = 0;
  for (let i = 0; i <= max; i++) {
    // 둘다 나눠지는 최대값까지 반복문을 돌린다.
    if (f % i === 0 && s % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

btn.onclick = () => {
  result.innerText = getGCD(f.value, s.value);
};
