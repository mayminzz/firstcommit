
const popUpButton = document.querySelector("button"); 
//h1태그를 불러와서, 이곳에 출력할거야!
const memo = document.querySelector("h1"); 
													
popUpButton.addEventListener("click", ()=> {
  const word = prompt("이름을 입력해주세요😃");
  memo.innerHTML = `제 이름은 ${word}입니다. `;
});