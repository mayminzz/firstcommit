// let userName = prompt("당신의 영문 이름은?");
// let upperName = userName.toUpperCase();
// document.write(upperName, "<br/>");

// let userNum = prompt("당신의 연락처는?", "010-1234-5678");
// let result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result, "<br/>")

let userEmail = prompt("당신의 이메일 주소는?");
let arrUrl = [".com", "ko.kr", ".net", ".or.kr", "go.kr"];
// 불리언
let check1 = false;
let check2 = false;
// 얘가 속해 있는 인덱스 값 찾아와
if (userEmail.indexOf("@") > 0) {
  check1 = true;
}
for (let i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}

if (check1 && check2) {
  console.log(userEmail);
} else {
  alert("이메일 형식이 잘못되었습니다.");
}
