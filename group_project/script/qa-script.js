// 제출하기 버튼 이벤트
const submitBtn = document.querySelector("#submitbtn");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");

submitBtn.addEventListener("click", () => {
  // try{
  //   if(userName.value !== "" && userEmail.value !== "") {
  //     throw `${userName.value}님, 문의하신 내용이 제출되었습니다. 감사합니다!`
  //   } else {
  //     throw "필수 입력 항목을 작성해주세요!"
  //   }
  // } catch(err) {
  //   alert(err)
  // } finally {
  //     userName = "";
  //     userEmail = "";
  // }
  if (userName.value !== "" && userEmail.value !== "") {
    alert(`${userName.value}님, 문의하신 내용이 제출되었습니다. 감사합니다!`);
  } else {
    alert("필수입력 항목을 작성해주세요!");
  }
});


