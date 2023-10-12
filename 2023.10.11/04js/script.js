// let x = 10;
// if (x > 5) {
//   console.log(`x는 5보다 큽니다!`);
// }

// let y = 10;
// if (y < 5) {
//   console.log(`y는 5보다 작습니다.`);
// }
// y -= 5;


// let y = 10;
// if (y > 5) {
//   console.log("y는 5보다 크다!!")
// }
// y -=5;
// console.log(y);


// string 생략 가능 프롬트가 문자열로 만들어주니까 굳이
// let userInput = prompt("이름을 입력하세요!");
// // null은 취소를 했을때
// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다.`)
// }

// let userInput = prompt("이름을 입력하세요");
// if (userInput === null) {
//   alert("취소하셨습니다.");
// }else {
//   alert(`${userInput}님 환영합니다.`)
// }

// let score = parseInt(prompt("CSCC평가 시험점수:"));
// (score != null) 예외 조항처리를 먼저 하는게 좋음
// 어떠한 값도 안들어가있다면 아무것도 하지마
// (score != null && score != undefined)

// if (score != null || score != undefined) {
//   if (score >= 90) {
//     alert("A 학점");
//   } else if (score >= 80) {
//     alert("B 학점")
//   }
//   else {
//     alert("C 학점")
//   }
// }
// 마지막 else는 위에 AB가 아니면 C학점으로 싸그리 몰겠다는 의미

// let userInput = prompt("이름을 입력하세요");
// if (userInput != null) {
//   alert(userInput);
// }
// let userInput = prompt("이름을 입력하세요!");
// //실행문이 단문으로 끝날때만 중괄호생략 가능!!
// if (userInput != null) alert(userInput);

// parse값으로 입력을 했기때문에 취소를 누르면 0으로 치환되기 때문에 홀수가 됨
// 취소를 눌러서 거짓으로 값이 나오게 된다면 parse 홀수로 인식한다.
// let userNumber = prompt("숫자를 입력하세요!");

// if (userNumber !== null || userNumber !== "") {
//   userNumber % 2 === 0
//     ? alert(`${userNumber}: 짝수`)
//     : alert(`${userNumber}: 홀수`);
// } else {
//   alert ("정상적인 숫자를 입력하세요!")
// }

// let result = confirm("정말로 회원을 탈퇴하시겠습니까?");
// // 확인을 트루 취소는 폴스
// if (result) {
//   document.write("정상적으로 탈퇴처리되었습니다");
// } else {
//   document.write("탈퇴 취소처리 되었습니다.");
// }

let month = parseInt(prompt("현재는 몇 월 입니까?", "ex.10"));

if (month >= 9 && month <= 11) {
  document.write("독서의 계절 가을이네요");
}else if (month >= 6 && month <= 8) {
  document.write("여행가기 좋은 여름이네요");
}else if (month >=3 && month <= 5) {
  document.write("햇살 가득한 봄이네요");
}else {
  document.write("스키의 계절 겨울이네요");
}


