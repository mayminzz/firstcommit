document.write("<h1>컴퓨터 가위.바위.보 맞추기!</h1>");

let game = prompt("가위.바위.보 중 선택하세요!", "ex.가위");
let gameNum;

if (game !== null && game !== "") {
  switch (game) {
    case "가위":
      gameNum = 1;
      break;
    case "바위":
      gameNum = 2;
      break;
    case "보":
      gameNum = 3;
      break;
    default:
      alert("잘못 작성했습니다.");
      location.reload();
  }
}
// 가위바위보 3개가 나와야하는데 랜덤은 실수만 나옴 제일 커봐야 0.9 3을 곱해봐야 2.7 3이 안돼 그래서 올림을 해주기
let com = Math.ceil(Math.random() * 3);
document.write(`<img src="./img_231012/1/math_img_${com}.jpg">`);

if (gameNum == com) {
  document.write(`<img src="./img_231012/1/game_1.jpg">`);
} else {
  document.write(`<img src="./img_231012/1/game_2.jpg">`);
}
