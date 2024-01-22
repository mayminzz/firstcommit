const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
// 이미지가 로드되면 깔아줘
img.onload = () => {
  // (그리고 싶은 이미지 X,Y 출력할 위치시작할 것인지, 오려낸 시점, 오려낸 시점,  X축으로부터 떨어진 시점, Y축으로부터 떨어진 시점, 사진너비(옵션), 사진높이(옵션),)
  ctx.drawImage(img, 100, 50, 280, 350, 160, 100, 140, 175);
};
img.src = "./img/cat.jpg";
