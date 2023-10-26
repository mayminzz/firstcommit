// 사용자가 인풋태그에 특정 이메일을 입력한다고 가정했을때 버튼 클릭시, 해당 이메일의 @문자열을 기준으로 앞에서 3개의 단어까지는 ***처리가 되어서 출력될 수 있도록 js코드를 완성
// abcdef@naver.com

const email = document.querySelector("#email");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length /2;
    userName = userName.substring(0,(userName.length - half));
    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});



    // let frontName = userName.split(0, userName[1/2]);
    // console.log(frontName);
    // let backName = userName.split(userName[])