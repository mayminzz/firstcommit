/*input 태그 안에 아무 숫자나 입력했을 때 
1. 만약 10 보다 작으면 아래 result영역에 해당 숫자가 출력
2. 10보다 크면 알림창을 활용해서 10보다 작은 수를 입력하세요 라는 메세지를 출력해주세요 
3. 만약, 숫자가 입력되지 않은 상태에서 버튼을 클릭한다면 숫자를 입력해주세요 라는 알림 메세지가 나오도록 해주세요
*/

const btn = document.querySelector("form > input");
const userNum = document.querySelector("#user-number");
// 래그 안에 인풋 서버 공간에 넘어가야지만 나오는데 지금 그게 안되니까 못 가지고옴

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let n = userNum.value;
  try {
    // 빈 문자열이거나 숫자가 아니라면
    if (n === "" || isNaN(n)) {
      throw `숫자를 입력하세요!`;
    }
    n = Number(n);
    if (n <= 10) {
      document.querySelector("#result").innerText = n;
    }
    if (n > 10) {
      throw `10보다 작은 수를 입력하세요!`;
    }
  } catch (err) {
    // 빈문자열이거나 숫자가 아니면
    alert(err);
  } finally {
    userNum.value = "";
  }
});

// const result = document.querySelector("#result");
// const userNum = document.querySelector("#user-number");
// const btn = document.querySelector("#btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   if (userNum !== "") {
//     if (userNum.value < 10) {
//       result.innerText = userNum.value;
//       userNum.value = "";

//     } else {
//       alert("10보다 작은 수를 입력해주세요!");
//     }
//   } else {
//     alert("숫자를 입력해주세요!");
//   }
// });
