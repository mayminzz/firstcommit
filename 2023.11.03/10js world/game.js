// lotto
// 1. button을 클릭했을 때 랜덤값으로 1~45까지의 숫자중 6개의 중복되지 않는 숫자가 gmae_lotto_number값을 가지고 있는 노드의 공간에 출력
// 2. button 태그 요소를 DOM에서 가져와서 정의
// 3. button 태그 요소에 이벤트 정의
// 4.  gmae_lotto_number 클래스값을 가지고 있는 노드 정의
// 5. js의 수학개체를 활용해서 랜덤값을 생성
// 6. 랜덤값을 총 6회 걸쳐서 반복 생성(반복문 사용)
// 7.랜덤값을 생성한 이후에 해당 값을 담아놓을 배열도 필요
// 8. 랜덤값이 들어갈 배열은 반드시 값이 중복되어서는 안된다.
// 9. 랜덤값이 총 6회에 걸쳐서 생성되었으나 만약 그중에서 중복값이 있다면 조건식에 의해서 재추첨을 해주는 설정

// 끝말잇기
// 문자열 / 메서드: 배열, 인덱스 값
// 정답 / 틀렸습니다.
const search = document.querySelector(".search");
search.addEventListener("click", (e) => {
  e.preventDefault();

  let word = document.querySelector("#word").innerText;
  let myWord = document.querySelector("#myword").value;

  let lastWord = word[word.length - 1];
  let firstWord = myWord[0];

  if (lastWord === firstWord) {
    document.querySelector("#result").innerText = "정답입니다!";
    document.querySelector("#word").innerText = myWord;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다!";
    document.querySelector("#myword").value = "";
  }
});

// lotto
const button = document.querySelector(".wrapper_lotto_btn");
const result = document.querySelector(".game_lotto_number");
const luckyNumber = {
  digitCount: 6,
  maxNumber: 45,
};
button.addEventListener("click", (e) => {
  e.preventDefault();
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for (let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  if (myNumber.size === 6) {
    result.innerText = `${[...myNumber]}`;
  } else {
    result.innerText = "재추첨하겠습니다.";
  }
});
