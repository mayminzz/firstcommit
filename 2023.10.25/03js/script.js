const seed = document.querySelector("#seed");
const total = document.querySelector("#total");
const raffleBtn = document.querySelector("#raffle");
const clear = document.querySelector("#clear");
const result = document.querySelector("#result");

raffleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // 반복하고 나온 값을 저장하기 위한 공간 정의
  let winner = "";
  // 4번을 반복 1~17번 중에서
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner += `${picked}번`;
  }
  result.innerText = `선발된 팀원 : ${winner}`;
});
