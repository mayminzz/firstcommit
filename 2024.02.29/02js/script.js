const button = document.querySelector("button");
const result = document.querySelector("#result");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
const lotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  
  result.innerText = `${[...myNumber]}`;
};

button.addEventListener("click", lotto);
