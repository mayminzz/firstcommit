// let id = "ezen";
// let pw = "1234";

// let user_id = prompt("당신의 아이디는?");
// // 중첩문
// if (id === user_id) {
//   let user_pw = prompt("당신의 비밀번호는?");
//   if (pw === user_pw) {
//     alert(`${user_id}님, 반갑습니다.`);
//   } else {
//     alert(`${user_id}님, 비밀번호가 일치하지 않습니다.`);
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다.");
//   location.reload();
// }

let id = "ezen";
let pw= "1234";

let user_id = prompt("아이디를 입력하세요");
if(user_id === id) {
  let user_pw = prompt("비밀번호를 입력해주세요");
  if(user_pw ===pw){
    alert(`${user_id}님 환영합니다. `);
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    location.reload();
  }
} else {
  alert("아이디가 일치하지 않습니다.");
  location.reload();
}