// 이터러블 객체 & 이터레이터 객체 & 제너레이터 함수
// 제너레이터 함수 생성 => 이터러블 객체 / next()
// 제너레이터 함수 사용 mext()사용법 & 실습예제 yeild 여기서 리턴문과 비슷한 역할

function* train() {
  yield "판교역";
  yield "이매역";
  yield "삼동역";
  yield "경기광주역";
  yield "초월역";
  yield "곤지암역";
  yield "신둔도예촌역";
  yield "이천역";
  yield "부발역";
  yield "세종대왕릉역";
  yield "여주역";
}

let gyeonggang = train();
console.log(gyeonggang);

const btn = document.querySelector("button")
const result = document.querySelector("#result")

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let current = gyeonggang.next();
  if(current.done !== true) {
    result.innerText = current.value;
  } else {
    result.innerText = "종점입니다!"
    btn.setAttribute("disabled", "disabled");
  }
})

// function* train() {
//   yield "판교역";
//   yield "이매역";
//   yield "삼동역";
//   yield "경기광주역";
//   yield "초월역";
//   yield "공지암역";
//   yield "신둔도예촌역";
//   yield "이천역";
//   yield "부발역";
//   yield "세종대왕릉역";
//   yield "여주역";
// }

// // gyeonggang 이터러블 한 객체가 되었다
// let gyeonggang = train();
// console.log(gyeonggang);

// const btn = document.querySelector("button");
// const result = document.querySelector("#result");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let current = gyeonggang.next();
//   // 불러올 값이 남아있다는 이야기
//   if (current.done !== true) {
//     result.innerText = current.value;
//   } else {
//     result.innerText = "종점입니다.";
//     btn.setAttribute("disabled", "disabled");
//     // 버튼이 더이상 클릭이 안된다. 
//   }
// });
