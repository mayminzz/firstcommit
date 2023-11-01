// 1. 6개의 숫자를 추첨
// 2. 로또는 중복되지 않는다.
// 3. 1~45까지 추첨
// 4. 언제 숫자가 생성되야 하는가?=> 버튼 클릭시
// 5. 생성된 숫자는 어디에 출력되어야 하는가?=> result 노드 안에 출력

const btn = document.querySelector("button");
const result = document.querySelector("#result");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
const digitCount = 6;
const maxNumber = 45;

btn.addEventListener("click", (e) => {
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if(myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`
  } else {
    result.innerText = `중복숫자 발생! 재추첨하겠습니다.`
  }
  e.preventDefault();
});

// const btn = document.querySelector("button");
// const result = document.querySelector("#result");
// console.log(result);

// for (let i = 1; i <= 6; i++) {
//   let number = new Set();
//   number = Math.floor(Math.random() * 50);
//   console.log(number);
// }

// btn.addEventListener("click", () => {
//   result.innerHTML = `
//   <ul>

//   </ul>
//   `
// })
