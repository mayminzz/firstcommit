let id = "ezen";
let pw = "1234";

let user_id = prompt("당신의 아이디는?");
// 중첩문
if (id === user_id) {
  let user_pw = prompt("당신의 비밀번호는?");
  if (pw === user_pw) {45-
    alert(`${user_id}님, 반갑습니다.`);
  } else {
    alert(`${user_id}님, 비밀번호가 일치하지 않습니다.`);
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}

//   alert("아이디가 일치하지 않습니다.");
// } else if (id == "ezen") {
//   prompt("패스워드를 입력해주세요");
// }
// if (pw !== "1234") {
//   alert("패스워드가 일치하지 않습니다.");
// } else {
//   alert(`${id}님, 환영합니다.`);
