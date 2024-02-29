const button = document.querySelector("button");
const result = document.querySelector("#result > span");
const bonusResult = document.querySelector("#bonus > span");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
const bonusNumber = {
  digitCount: 1,
  maxNumber: 45,
};
const bonus = () => {
  const { digitCount, maxNumber } = bonusNumber;
  let bonusNum = new Set();
  for (let i = 0; i < digitCount; i++) {
    bonusNum.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  bonusResult.innerText = `${[...bonusNum]}`;
};

const lotto = () => {
  const { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }

  result.innerText = `${[...myNumber]}`;
  bonus();
};

button.addEventListener("click", lotto);
